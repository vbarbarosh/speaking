const Promise = require('bluebird');

console.clear();
main();

async function main()
{
    for (using it of collection()) {
        console.log(it.name);
    }
}

function collection()
{
    return [
        {name: 1, [Symbol.dispose]() { console.log('dispose', this.name); }},
        {name: 2, [Symbol.dispose]() { console.log('dispose', this.name); }},
        {name: 3, [Symbol.dispose]() { console.log('dispose', this.name); }},
    ];
}
