function solve(input){
    const result = [];

    while (input.length > 0) {
        let hero = input.shift();
        let [name, level, itemsStrings] = hero.split(' / ');
        const items = itemsStrings ? itemsStrings.split(', ') : [];
        level = Number(level);

        result.push({ name, level, items});
    }

    return JSON.stringify(result);
}

var stringify = solve(
    ['Isacc / 1 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);

var json = JSON.parse(stringify);

console.log(solve(
    ['Isacc / 1 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))
