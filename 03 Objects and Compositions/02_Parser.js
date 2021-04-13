let count = 0;

let parser = {
    increment() { count++; },
    decrement() { count--; },
    reset() { count = 0}
}

parser[command]();
