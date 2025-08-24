const products = require('./products.json');

console.clear();
console.log(products.filter(v => v.price > 100).map(v => v.name));
