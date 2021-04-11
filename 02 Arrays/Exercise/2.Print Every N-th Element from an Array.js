function printArray(...arr){
    var array = arr[0];
    var number = arr[1];
    var elements = [];

    for (let i = 0; i < array.length; i+=number) {
        elements.push(array[i]);
    }

    console.log(elements.join(' '))
}

printArray(['5','20','31','4','20'], 2)
printArray(['1','2','3','4','5'], 6)
printArray(['dsa','asd','test','tset'],2)