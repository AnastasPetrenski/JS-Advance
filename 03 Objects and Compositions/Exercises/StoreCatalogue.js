function solve(input){
    let dictionary = {};

    while (input.length) {
        let [name, price] = input.shift().split(' : ')
        
        let singleLetter = name[0];
        
        if (!dictionary[singleLetter]) {
            dictionary[singleLetter] = [];
        }

        dictionary[singleLetter].push({name, price: Number(price)});
        
        dictionary[singleLetter].sort((a, b) => (a.name).localeCompare(b.name));
    }

    for (const key in dictionary) {
        let elements = dictionary[key];
        for (const ele of elements) {
            console.log(ele);
        }
    }

    let mapping = [];
    for (const key in dictionary) {
       //Select(x => $"{x.name}: {x.price}")
       let elements = dictionary[key].map(x => `  ${x.name}: ${x.price}`);
       //StringBuilder()
       let string = `${key}\n${elements.join('\n')}`;
       //Add()
       mapping.push(string);
    }

    console.log(mapping.join('\n'));

    const keysSort = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
    const arrays = Object.entries(dictionary);

    const result = [];
    Object.entries(dictionary).sort((a, b) => (a[0]).localeCompare(b[0]))
            .forEach(element => {

        let product = element[1]
            .map(e => `  ${e.name}: ${e.price}`)
            .join('\n');

        let string = `${element[0]}\n${element[1]
            .map(e => `  ${e.name}: ${e.price}`)
            .join('\n')}`;

        result.push(string);
    });


    return result;
}

let result = (solve([
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.50',
    'Anti-bug sprey : 15',
    'Appricot : 20.4',
    'T-Shirt : 10'
]));

for (const ele of result) {
    console.log(ele);
}