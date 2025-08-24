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
    xtab(products.slice().sort(fcmp));

    function fcmp(a, b) {
        return a.category.localeCompare(b.category)
            || a.price - b.price;
    }
}
