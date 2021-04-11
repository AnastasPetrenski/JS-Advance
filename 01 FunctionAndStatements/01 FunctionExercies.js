//If we invoke function without arguments - value type will be Undefine
function solve(args){
    let num = 20;

    if (num === args){
        console.log("Yes")
    } else {
        console.log("No")
    }
}

let num = "20";
const age = 20;
solve(age)
solve(num)

//First class function can argument to other functions
function running(){
    return "Running";
}

function category(run, type){
    console.log(run() + " " + type);
}

category(running, "sprint")

//Nested function
function calc(m, n){
    function square(num){
        return num * num;        
    }

    return Math.sqrt(square(m) + square(n));
}

console.log(calc(3,4))

//Hoisting variables - var 
hoisting = 6; // set value
console.log(hoisting + " var example for hoisting value");
var hoisting; //declaration

console.log(walk);
walk();
var walk = function(){
    console.log("Walking")
}

