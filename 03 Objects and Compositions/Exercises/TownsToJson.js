function solve(input) {
    let [columns, ...table] = input
        .map(x => x.split('|')
            .filter(x => x != "")
            .map(x => x.trim())
            .map(x => isNaN(x) ? x : Number(Number(x).toFixed(2))));

    function isEmptyString(x) {
        return x !== "";
    }

    function convertIfNum(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2));
    }

    function splitLine(input) {
        return input.split('|').filter(isEmptyString).map(x => x.trim()).map(convertIfNum);
    }

    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {})
    }));
}

var jsonstringify = (solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.693369 | 23.23442 |',
    '| Beijing | 39.332632| 116.356236 |'
]));

let objects = JSON.parse(jsonstringify);

// function reducer(objects) {
//     return [...Object.entries(objects)].reduce((acc, curr), {});
// }

// var result = reducer(objects);