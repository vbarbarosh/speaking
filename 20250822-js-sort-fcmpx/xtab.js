function xtab(items)
{
    const keys = [...new Set(items.flatMap(v => Object.keys(v)))];
    const len = Object.fromEntries(keys.map(key => [key, Math.max(key.length, ...items.map(v => String(v[key]??'').length))]));
    const pad = Object.fromEntries(keys.map(v => [v, typeof items[0][v] === 'number' ? 'padStart' : 'padEnd']));
    const sep = ' | ';
    const sep2 = '---';
    console.log(keys.map(key => String(key)[pad[key]](len[key])).join(sep));
    console.log(keys.map(key => '-'.repeat(len[key])).join(sep2));
    items.forEach(function (item) {
        console.log(keys.map(key => String(item[key] ?? '')[pad[key]](len[key])).join(sep));
    });
}

module.exports = xtab;
