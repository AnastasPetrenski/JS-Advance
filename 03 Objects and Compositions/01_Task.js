function population(input){
    const towns = {};

    for (let item of input) {
        let [key, value] = item.split(' <-> '); //.filter(x => x);
        
        let population = Number(value);
       
        //JS auto create property of the object for us
        if (towns[key] != undefined) {
            population += towns[key];
        } 
            
        towns[key] = population;
        
    }

    console.log(towns);    
}

population(['Instanbul <-> 100000',
'Sofia <-> 2000000',
'Mexico City <-> 3266262626',
'Hong Kong <-> 36260055',
'Instanbul <-> 3626200',
'Sofia <-> 1111']
)