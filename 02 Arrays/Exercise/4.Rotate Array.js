function rotation(...input){
    let arr = input[0];
    let n = input[1];

    for (let i = 0; i < n; i++) {
        const element = arr.shift();
        arr.push(element);
    }

    return arr;
}

console.log(rotation(['1','2','3','4'],2));