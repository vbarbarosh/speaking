const products = require('./products.json');
const xtab = require('./xtab');

products.forEach(v => delete v.brand);
products.forEach(v => delete v.discount);
products.forEach(v => delete v.rating);

console.clear();
xtab(products.slice().sort((a,b) => a.category.localeCompare(b.category)
        || a.price - b.price));

xtab(products.slice().sort(function (a, b) {
    return a.category.localeCompare(b.category)
        || a.price - b.price;
}));
