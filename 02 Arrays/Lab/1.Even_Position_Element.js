function even(array){
    let numbers = [];
    let evenNumbers = [];

    array.forEach(element => {
        numbers.push(element);
        if (element % 2 == 0) {
            evenNumbers.push(element);
        }
    });
console.log(evenNumbers.join(', '))

    return evenNumbers.join(' ');
}

console.log(even([1,2,3,4,5,6]))
