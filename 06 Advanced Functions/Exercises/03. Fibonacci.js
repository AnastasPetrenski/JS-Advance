function getFibonator(){
    let first = 0;
    let second = 1;

    return update;

    function update(){
        fibResult = second + first;
        first = second;
        second = fibResult;
        return first;
    }

}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());