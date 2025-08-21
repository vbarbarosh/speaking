const Promise = require('bluebird');

console.clear();
main();

async function main()
{
    await using _ = profiler('main');
    await Promise.delay(100);
}

function profiler(name)
{
    const time0 = process.hrtime();
    return {
        [Symbol.dispose]: function () {
            const time1 = process.hrtime();
            const ms = (time1[1] - time0[1])/1E6;
            console.log('Symbol.dispose', name, ms);
        },
        [Symbol.asyncDispose]: async function () {
            const time1 = process.hrtime();
            const ms = (time1[1] - time0[1])/1E6;
            console.log('Symbol.asyncDispose', name, ms);
            await Promise.delay(100);
        },
    };
}
