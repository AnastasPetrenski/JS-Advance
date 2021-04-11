function biggerHalf(numbers){
    return numbers
        .sort((a,b) => a - b)
        .slice(Math.floor(numbers.length / 2));
}

console.log(biggerHalf([34,434,35,46,877,4]));