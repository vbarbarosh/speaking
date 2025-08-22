const products = require('./products.json');
const xtab = require('./xtab.js');

console.clear();

xtab(products);
console.log();

xtab(products.slice().sort((a,b) => a.price - b.price));
console.log();
