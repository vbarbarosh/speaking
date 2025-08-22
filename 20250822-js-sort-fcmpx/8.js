const products = require('./products.json');
const xtab = require('./xtab.js');

console.clear();

xtab(products);
console.log();

xtab(products.slice().sort(fcmpx('category,-price')));

function fcmpx(fields)
{
    if (typeof fields === 'string') {
        return fcmpx(fields.split(',').map(function (expr) {
            if (expr[0] === '-') {
                expr = expr.slice(1);
                return {read: v => v[expr], desc: 1};
            }
            return {read: v => v[expr]};
        }));
    }
    return function (a, b) {
        for (let i = 0; i < fields.length; ++i) {
            let aa = fields[i].read(a);
            let bb = fields[i].read(b);
            if (fields[i].top) {
                aa = fields[i].top.indexOf(aa) >>> 0;
                bb = fields[i].top.indexOf(bb) >>> 0;
            }
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
