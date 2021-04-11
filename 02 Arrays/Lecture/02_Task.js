//Task 2 Sum first and Last
function sum(array){
    let first = array.shift();
    let second = array.pop();
    let sum = Number(first) + Number(second);

    let result = 0;
    while(array.length > 0){
        var element = array.shift();
        result += Number(element);
    }

    return sum;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['20', '30']))
console.log(sum(['20']))