function solve(input){
    let object = {};
    let array = [];

    while(input.length){
        let product = input.shift().split(' : ');

        console.log(product);
        if (!object[product[0]]) {
            object[product[0]] = product[1];
        }

        // let name = product[0];
        // let price = product[1];

        const [name, price] = product;

        let obj = {name, price};
        
        array.push(obj)
    }

    return object;
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