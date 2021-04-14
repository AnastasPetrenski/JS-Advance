let obj = {a: 5, b: 6, c: 'Pesho'}

let num1 = obj.a;
let num2 = obj.b;

console.log(num1, num2);

const { c } = obj;

console.log(c);

let arr = [{d: 1, v: 15}, {e: 2, z: 'Gosho'}]

let [{v}] = arr;
let [, {z}] = arr;

console.log(v);
console.log(z);