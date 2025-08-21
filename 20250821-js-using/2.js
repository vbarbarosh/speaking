console.clear();
main();

function main()
{
    using file1 = fopen('file1.txt');
}

function fopen(path)
{
    return {
        [Symbol.dispose]: function () {
            console.log('Symbol.dispose', path);
        },
    };
}
