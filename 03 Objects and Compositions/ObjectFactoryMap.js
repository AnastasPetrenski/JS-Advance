function factory(library, orders){
    const result = orders.map(order => {
        const composed = Object.assign({}, order.templete, order.parts.reduce((a, c) => 
                                            ({}), {}));
        const composed2 = Object.assign({}, order.templete, order.parts.reduce((a, c) => 
                                            Object.assign(a, {[c]: library[c]}), {}));
        
        return composed;
    })

    //return
    return result;
}

const factoryUltimate = (library, orders) => orders.map(order => 
    Object.assign({}, order.templete, order.parts.reduce((a, c) => ({}), {})));

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
