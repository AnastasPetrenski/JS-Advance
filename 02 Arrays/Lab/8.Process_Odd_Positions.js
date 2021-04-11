function getOddElements(array){
    array.reverse();
    let oddNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            oddNumbers.push(array[i] * 2)
        }    
    }

    console.log(oddNumbers.join(' '));
}

getOddElements([10, 15, 20, 25])
getOddElements([3, 0, 10, 4, 7, 3])

let unordered = [10, 15, 20, 25]
let ordered = unordered.reverse();

console.log(unordered.join(' '));