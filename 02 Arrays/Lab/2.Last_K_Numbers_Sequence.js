function SumLastNumbers(array){
    let numbers = [];
    let arrayLength = array[0];
    let numbersToSum = array[1];
    
    let sumFunction =  function (a, b){
        return a + b
      };

    for (let i = 0; i < arrayLength; i++) {        
        let customNumbers = [];
        let element = 0;
        if (numbers.length > numbersToSum) {
            customNumbers = numbers.slice(-numbersToSum);
            console.log(customNumbers.join(' '))
        } else {
         customNumbers = numbers;
        }

        customNumbers.forEach(function(nums){
            element = sumFunction(element, nums)
        });
        console.log(element)
        if (element == 0) {
            element = 1;
        }
        numbers.push(element);
    }

    console.log(numbers.join(' '));
}

SumLastNumbers([6,3])
SumLastNumbers([8,2])