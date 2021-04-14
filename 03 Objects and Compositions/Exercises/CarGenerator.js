function carBuilder(obj){
    const {
        model,
        power,
        carriege,
        color,
        wheelsize
    } = obj;

    function getEngine(power){
        const engines = [
            {power: 90, volume: 1800},
            {power: 120, volume: 2400},
            {power: 200, volume: 3500}
        ]
        .sort((a, b) => a.power - b.power);
        
        return engines.find(x => x.power >= power);
    }

    function getWheels(size){

        let wheel = Math.floor(size) % 2 == 0 
        ? Math.floor(size) - 1 
        : Math.floor(size);
        
        return Array(4).fill(wheel, 0, 4)
    }

    return {
        model,
        engine: getEngine(power),
        carriege: {
            type: carriege,
            color: color
        },
        wheels: getWheels(wheelsize)
    };

    
}

let car = carBuilder({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriege: 'hatchback',
    wheelsize: '14'
})