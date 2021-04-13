function orderByName(input){
    input.sort((a,b) => a.localeCompare(b));
    let names = [];

    for (let i = 0; i < input.length; i++) {
        names.push(i+1 + '.' + input[i]);
    }
    console.log(names.join('\n'));
}

orderByName(["John", "Bob", "Christina", "Ema"])