function factory(library, orders){
    const result = [];

    //iterate over orders
    for (const order of orders) {
        //copy order templete shallow copy
        const composed = Object.assign({}, order.templete);
        //compose methods by part list
        for (const part of order.parts) {
            composed[part] = library[part];
        }

        result.push(composed);
    }
    //return
    return result;
}

const library = {
    print: function(){
        console.log(`${this.name} is printing a page`);
    },
    scan: function(){
        console.log(`${this.name} is scanning document`);
    },
    play: function (){
        console.log(`${this.name} is playing '${track}' by '${artist}'`);
    }
}

const order = [
    {
        templete: {name: 'Printer'},
        parts: ['print']
    },
    {
        templete: {name: 'Scaner'},
        parts: ['scan']
    },
    {
        templete: {name: 'Copier'},
        parts: ['print', 'scan']
    },
    {
        templete: {name: 'CD'},
        parts: ['play']
    }
]

const products = factory(library, order);

console.log(products);

const [{name}] = products;
console.log(name)

for (const key in products) {
    
        const element = products[key];
        console.log(element)
       
    
}

// const player = products[3];
// player.play('Rick', 'song');
