function solve(input) {
    let cheapestSales = [];
    let log = {};
    while (input.length) {
        let [town, product, price] = input.shift().split(' | ');
        const obj = { town, product, price };

        if (!log[product]) {
            log[product] = { town, price: Number(price) };
        } else {
            log[product] = log[product].price <= Number(price) ? log[product] : { town, product, price };
        }

        let current = cheapestSales.find(x => x.product == obj.product)
        if (current == null) {
            cheapestSales.push(obj);
        } else {
            if (current.price > obj.price) {
                current.town = obj.town;
                current.price = obj.price;
            }
        }

        console.log(obj)
    }
    const logstring = JSON.stringify(log);
    const arraystring = JSON.stringify(cheapestSales);

    console.log(JSON.stringify(log));
    console.log(JSON.stringify(cheapestSales));

    let result = [];
    for (const sale of cheapestSales) {
        result.push(`${sale.product} -> ${sale.price} ${sale.town}`)
        //console.log(`${sale.product} -> ${sale.price} ${sale.town}`)
    }

    return result;
}

var result = (solve(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10',
    ]
))

for (const key of result) {
   console.log(key);
}