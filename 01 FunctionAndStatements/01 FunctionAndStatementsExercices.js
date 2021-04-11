//First task
function findMaxNumber(numbers){
    let maxNumber = Math.max(...numbers);
    return maxNumber;
}

let arr = [1,2,3];
console.log(findMaxNumber(arr));

let arr2 = [...arr, 4, 5];

//Second task
function getStringLength(array){
    let count = 0;
    let avg = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        count += element.length;
    }

    avg = Math.floor(count / array.length);
    console.log(count);
    console.log(avg);
    let test = 'test js aaray';
    let args = [count, avg, test];
    return args;
    
}

let stringArray = ['chocolate','ice cream', 'cake' ];
console.log(getStringLength(stringArray));

//Third task
function calculater(num1, num2, operator){
    let result;
    switch (operator) {
        case '+': result = num1 + num2;  break;
        case '-': result = num1 - num2;  break;
        case '*': result = num1 * num2;  break;
        case '/': result = num1 / num2;  break;
        case '%': result = num1 % num2;  break;
        case '**': result = num1 ** num2;  break;
    }

    console.log(result);
}

//Fourth task
function calculateRangeNumber(a, b){
    let result = 0;
    for (let i = Number(a); i <= Number(b); i++) {
        
        result += i;
    }

    return result;
}

console.log(calculateRangeNumber('1', '5'));

//Fifth task
function circleArea(n){
    let result = 0;
    let type = typeof(n);
    if(type === 'number'){
        result = Math.PI * Math.pow(n, 2);
        console.log(result.toFixed(2));    
    } else {
        console.log(`We ${typeof(n)} asdas`);
    }
}

circleArea(5);

//Sixth task
function PrintSquare(n = 5){
    for (let index = 0; index < n; index++) {
        console.log('*'.repeat(n));
    }
}

PrintSquare();
PrintSquare(2);

//Seventh task
function dayOfWeek(day){
    let result = 0;
    switch (day) {
        case 'Monday': result = 1; break;
        case 'Tuesday': result = 2; break;
        case 'Wednesday': result = 3; break;
        case 'Thursday': result = 4; break;
        case 'Friday': result = 5; break;
        case 'Saturday': result = 6; break;
        case 'Sunday': result = 7; break;
        default: result = 'error'; break;
    }

    return result;
}

console.log(dayOfWeek('Monday'));
console.log(dayOfWeek('Mondays'));

//Eighth task
function aggregateElements(numbers){
    let result = [];
    for (let index = 1; index < 4; index++) {
        if(index == 1){
            let sum = numbers.reduce((a, b) => a + b);
            result.push(sum);
        } else if (index == 2) {
            let total = 0;
            numbers.forEach(element => {
                total += 1/element;
            });
            result.push(total.toFixed(4));
        } else {
            let concated = numbers.join('');
            result.push(concated);
        }     
    }
    
    return result.join('\r\n'); 
}

let arr11 = [1, 2, 3];
console.log(aggregateElements(arr11));