const products = require('./products.json');
const xtab = require('./xtab.js');

console.clear();

xtab(products);
console.log();

xtab(products.slice().sort((a,b) => fcmp_default(a.category, b.category)));
console.log();

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
