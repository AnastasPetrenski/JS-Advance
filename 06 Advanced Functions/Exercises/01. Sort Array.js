function sort(arr, type){
    const map = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }

    return arr.sort(map[type])
}

console.log(sort([14, 7, 17, 6, 8], 'desc'));

const a = sort([14, 7, 17, 6, 8], 'asc');
console.log(a);
