function increasingSubsequence(array){
    let arr = [];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (arr.length == 0) {
            arr.push(element);
        }

        let lastElement = arr.pop();
        if (lastElement < element) {
            arr.push(lastElement);
            arr.push(element);
        } else {
            arr.push(lastElement);
        }
    }

    console.log(arr.join(' '));
}


let input = [1,3,8,4,10,12,3,2,24];   
increasingSubsequence(input);


let arr = [20,3,2,15,6,1];
increasingSubsequence(arr);    