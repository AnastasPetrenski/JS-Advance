function calorie(array){
    const obj = {};
    for (let i = 0; i < array.length; i += 2) {
       
            obj[array[i]] = Number(array[i+1]);
        
    }

    console.log(obj);
}

calorie(['Cake', 20, 'Milk', 30, 'Sugar', 40]);

let obj1 = { test: '' };

obj1.test = '1';

console.log(obj1.test);