//Mutator methods change the original array

//Accessor methods return a new array

let myArr = [10,20,30,40,50,60,70,80];
let myEmpryArr = [];

console.log(myArr[2]);
//undefined
console.log(myArr[myArr.length]);
//js will add empty elements from index 3 to index 7 and after that will set 44 to index 8
myArr[8] = 44;

console.log(myArr[myArr.length]);
console.log(myArr)

for (let i = 0; i < myArr.length; i++){
    if(i % 2 == 0){
        console.log(`[${i}] -> ${myArr[i]}`);
    }
}

//for ARRAYs
for (let item of myArr){
    console.log(item);
}

//for OBJECTS
let obj = {a: 1, b: 2}

for (const key in obj) {
    console.log(`obj.${key} = ${obj[key]}`)
}

//spred operator or rest operator ...

let [...rest] = myArr;
console.log(...rest);

//false coz they have different references
console.log(rest == myArr);

function takeRest(...params){
    console.log(...params);
}

takeRest(1,2);
takeRest(1,2,3,4);

//Splice => RemoveAt/RemoveAll
let nums = [1,3,4,5,6,7,8];
nums.splice(1, 0, 2); //insert at index 1 (add 2)

nums.splice(4, 1, 19); //replaces 1 element at index 4 (replace 5 => 19)

nums.splice(2, 1); //remove 1 element at index 2 (remove 3)

console.log(nums.join(" "));

nums.splice(4,5,99);

console.log(nums.join(" "));

//Fill =>

let arr = [1,2,3,4];

arr.fill(0, 2, 4); // replace numbers from index 2 until position 4 (or arr.length-1)
arr.fill(5, 1); // replace all after index 1 with 5
arr.fill(6); // replace all with 6

//Reverse

arr.reverse();

//Sort numbers
let unsorted = [2,34,56,576,57,7];

unsorted.sort((a, b) => a - b);

console.log(unsorted.join(" "));

//Sort strings
let names = ['Nasko', 'Vasko', 'Pesho', 'angel'];

names.sort((a, b) => a.localeCompare(b));

console.log(names.join(' '));

//Concat
let buket = unsorted.concat(names, myArr);
console.log(buket.join(' '));

//Slice => .Skip().Take()
let slicedArray = buket.slice(6, 10);

let take2ElementsStartFromEnd = buket.slice(-3);

let testString = 'Anastas.json';

console.log(slicedArray.join(' '));
console.log(take2ElementsStartFromEnd.join(' '));
console.log(testString.slice(-4));
console.log(testString.slice(7, -4));

//Includes => .Contains()
console.log(unsorted.includes(2)); //true 
console.log(unsorted.includes(2, 1)); //false start searching from index 1

//some => .Any()

//indexOf =>  .IndexOf() or .FirstOrDefault()
console.log(unsorted.indexOf(2));
console.log(unsorted.indexOf(2, 1)); // -1

//Unshift and Shift => Queue.Enqueue() and Queue.Dequeue()

//Pop and Push => Stack.Pop() and Stack.Push()

//Split => .Split()
let expression = 'false coz they have different references';
let split = expression.split(' ');
console.log(split.join(', '));


//ForEach
split.forEach((x, i) => console.log(`${i} -> ${x}`));
let totalSum = 0;

let ratings = [5, 4, 5, 2, 6];
let sum = 0;

let sumFunction =  function (a, b){
  return a + b
};

ratings.forEach( function(rating) {
  sum =  sumFunction(sum, rating)
});

console.log(sum);

//Some => check and return true or false and accept predicate
console.log(ratings.some(x => x == 5));

//Find => first name that start with 'N' return 'Nasko'
console.log(names.find(x => x[0] == 'N'));

//Filter => .Where()
var filtered = (ratings.filter(x => x % 2 == 0));
var filterNames = names.filter(x => x.includes('a'));
console.log(filtered.join());
console.log(filterNames.join());

//map => .Select()
let numbersAsStrings = ['1', '2', '3'];
let convert = (numbersAsStrings.map(Number).map(x => x + 10));
console.log(convert.join());

//reduce => .Aggregate()
function ratingReducer(a , b){
    return a + b;
}

let result = (ratings.reduce((acc, c) => acc + c, 0));
let average = ratings.reduce((acc, c, index, ratings) => acc + c / ratings.length, 0);
let max = ratings.reduce((acc, c) => acc > c ? acc : c)

console.log(result);
console.log(average);
console.log(max);

