const products = require('./products.json');
const xtab = require('./xtab.js');

console.clear();

xtab(products);
console.log();

xtab(products.slice().sort(fcmpx([
    {read: v => v.category},
    {read: v => v.price, desc: 1},
])));

function fcmpx(fields)
{
    return function (a, b) {
        for (let i = 0; i < fields.length; ++i) {
            let aa = fields[i].read(a);
            let bb = fields[i].read(b);
            if (fields[i].desc) {
                [aa, bb] = [bb, aa];
            }
            const tmp = fcmp_default(aa, bb);
            if (tmp) {
                return tmp;
            }
        }
        return 0;
    };
}

function fcmp_default(a, b)
{
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
