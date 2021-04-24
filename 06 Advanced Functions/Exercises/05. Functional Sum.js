function curring(a){
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(curring(1)(2)(-3));

//       *****Closure****
function add(a){
    let sum = 0;
    sum += a;
    calc.toString = () => sum;
    return calc;
    
    function calc(b) {
        sum += b
        return calc;
    }
}
console.log("" + add(1)(2)(3));
//      *****Chaining******
//add() => (1) //calc => (2) // calc(3)
let first = add(1);
let second = first(2);
let third = second(3);

console.log(third.toString());