const products = require('./products.json');
const xtab = require('./xtab.js');

console.clear();

xtab(products);
console.log();

xtab(products.slice().sort(fcmp));
console.log();

function fcmp(a, b)
{
    return fcmp_utf8_cs(a.category, b.category)
        || fcmp_numeric(a.price, b.price);
}

function fcmp_utf8_cs(a, b)
{
    return a.localeCompare(b, undefined, {sensitivity: 'variant'});
}

function fcmp_numeric(a, b)
{
    return a - b;
}
