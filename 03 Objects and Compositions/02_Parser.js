let count = 0;

let parser = {
    increment() { count++; },
    decrement() { count--; },
    reset() { count = 0}
}

parser.increment(count);

console.log(count);

const result = 5 > 7 ? 4 : 10;

console.log(result);
