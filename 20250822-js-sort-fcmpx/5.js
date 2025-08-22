const products = require('./products.json');
const xtab = require('./xtab.js');

console.clear();

xtab(products);
console.log();

xtab(products.slice().sort(fcmpx([v => v.category, v => v.price])));

function fcmpx(fields)
{
    return function (a, b) {
        for (let i = 0; i < fields.length; ++i) {
            const aa = fields[i](a);
            const bb = fields[i](b);
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
