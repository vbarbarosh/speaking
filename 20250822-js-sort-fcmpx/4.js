const products = require('./products.json');
const xtab = require('./xtab.js');

console.clear();

xtab(products);
console.log();

xtab(products.slice().sort(fcmp));
console.log();

function fcmp(a, b)
{
    const top = ['in_stock', 'limited'];
    return fcmp_numeric(top.indexOf(a.availability) >>> 0,
                        top.indexOf(b.availability) >>> 0)
        || fcmp_utf8_cs(a.category, b.category)
        || fcmp_numeric(b.price, a.price);
}

function fcmp_utf8_cs(a, b)
{
    return a.localeCompare(b, undefined, {sensitivity: 'variant'});
}

function fcmp_numeric(a, b)
{
    return a - b;
}
