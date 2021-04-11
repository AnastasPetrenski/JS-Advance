//Task 1 EvenNumbers
function even(myArr){
    let result = [];

    for (let i = 0; i < myArr.length; i++){
        if(i % 2 == 0){
            // result += myArr[i] + ' ';
            result[result.length] = myArr[i];
        }
    }
    // console.log(result);
    return result.join(' ');
}
let myArr = [10,20,30,40,50,60,70,80];
console.log(even(myArr));