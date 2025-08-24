const products = require('./products.json');

console.clear();
console.log(products.map(v => v.id));
