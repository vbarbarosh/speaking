const products = require('./products.json');
const xtab = require('./xtab');

// Область видимости функции = функция или модуль
// Область видимости arrow функции = область видимости const переменной
// (т.е. от определения до конца блока)

products.forEach(v => delete v.brand);
products.forEach(v => delete v.discount);
products.forEach(v => delete v.rating);

console.clear();
main();

function main()
{
    const fcmp = (a, b) => a.category.localeCompare(b.category)
        || a.price - b.price;

    xtab(products.slice().sort(fcmp));

    xtab(products.slice().sort(function (a, b) {
        return a.category.localeCompare(b.category)
            || a.price - b.price;
    }));
}
