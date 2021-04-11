//Task 3 Create new Ordered Array
function orderNumbers(array){
    let result = [];

    while(array.length > 0){
        let current = array.shift();

        if(current < 0) {
            result.unshift(current);
        }
        else {
            result.push(current);
        }
    }
    
    return result.join(' ');
}

console.log(orderNumbers([7,-2,8,9]));
