function commandBuilder(array){
    let numbers = [];
    console.log(array.join(' '))
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            numbers.push(i+1);
        }else{
            numbers.pop();
        }
        
        if (numbers.length == 0) {
            numbers[0] = 'Empty';
            return numbers;
        } else {
            return numbers;    
        }
        
    }
}

let numbers = commandBuilder(['add','add','add','add'])
console.log(numbers.join(' '))

let example = commandBuilder(['remove','remove','remove'])
console.log(example.join(' '))