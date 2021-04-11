let stringVariable = 'some text';

let numberVariable = 2;
let numberVariableDouble = 3.14;

let boolean = true;
let boolean2 = true;

let undefined;

console.log(stringVariable);
//name - undeclear variable
//console.log(name); <--- ReferenceError: name is not defined
console.log(undefined);

console.log(Number('1'));
console.log(Number('3.14')); //cast to number
console.log(+'6');  //cast to number
console.log(typeof(+'6')); // type Number
console.log(typeof('6')); // type String

// function declaration 
function sum(x, y){
    return x + y;
}

var outputSum = sum(numberVariable , numberVariableDouble);
console.log("Result of Sum" + outputSum);

//function expression
let multiply = function(a, b){
    return a * b;
}

let product = multiply(10, 2);
console.log("Multiply function:" + " " + product)

//arrow function 
let substract = (a, b) => a - b;

let diff = substract(10, 5);
console.log("Substract:" + " " +diff);

//invoke function foo, without declaring all parameters 
function foo(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c); //undefined
}
foo(1,2)
//js will cut useless arguments 4 and 5
foo(1,2,3,4,5)

//Default function parameter
function printStarts(count = 5){
    console.log("*".repeat(count))
}
printStarts();
printStarts(2);

//Difference between var and let
//variable name have scope in if block only, while var expands the scope of the variable out of the if block
if(true)
{
   var name = 'Nasko';   
}

console.log(name);
let result = 2;
console.log(result %= numberVariable);


console.log(6 === '6'); // false - identity operator
console.log(6 == '6'); // true - equal operator, js evaluate string '6' to number 6 

