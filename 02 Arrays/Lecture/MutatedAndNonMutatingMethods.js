/*********** MUTATING METHODS **************/
//PUSH, UNSHIFT, POP, SHIFT, SPLICE

/*********** NON-MUTATING METHODS **************/
//CONCAT, SPRED operator, FILTER, SLICE, FILL, MAP

/*********** METHODS RETURN **************/
/*
    PUSH: new length of the array <-- add to the end
    POP: last element of an array
    SHIFT: first element of an array
    UNSHIFT: new length of the array <-- add to the beginning 
    SPLICE: new array containing the deleted elements. [1], [1,2,3] or [] if no elements are removed
    CONCAT: new combined array (arr1 + arr2)
    FILTER: new array with the elements that pass the condition
    SLICE: shallow copy of a portion of an array into a new array
    FILL: the modified array
    MAP: new array populated with the results
*/

/*********** I. Add: Mutating**************/

// since the array will be mutated, 
// use 'let' rather than 'const'
let mutatingAdd = ['a', 'b', 'c', 'd', 'e']; 

mutatingAdd.push('f'); // ['a', 'b', 'c', 'd', 'e', 'f']
mutatingAdd.unshift('z'); // ['z', 'a', 'b', 'c', 'd', 'e' 'f']

/*********** II. Add: Non-Mutating ********/
const arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = arr1.concat('f'); // ['a', 'b', 'c', 'd', 'e'. 'f']
console.log(arr1); // ['a', 'b', 'c', 'd', 'e']

//SPRED operator
let arr3 = ['a', 'b', 'c', 'd', 'e'];

let arr4 = [...arr3, 'f']; // ['a', 'b', 'c', 'd', 'e', 'f']
const arr5 = ['z', ...arr3]; // ['z', 'a', 'b', 'c', 'd', 'e']

/************III. Remove: Mutating***************/
// since the array will be mutated, 
// use 'let' rather than 'const'
let mutatingRemove = ['a', 'b', 'c', 'd', 'e'];
mutatingRemove.pop(); // ['a', 'b', 'c', 'd']
mutatingRemove.shift(); // ['b', 'c', 'd']

mutatingRemove = ['a', 'b', 'c', 'd', 'e'];

const returnedValue1 = mutatingRemove.pop();
console.log(mutatingRemove); // ['a', 'b', 'c', 'd']
console.log(returnedValue1); // 'e'

const returnedValue2 = mutatingRemove.shift();
console.log(mutatingRemove); // ['b', 'c', 'd']
console.log(returnedValue2); // 'a'

mutatingRemove = ['a', 'b', 'c', 'd', 'e'];
let returnedItems = mutatingRemove.splice(0, 2);
console.log(mutatingRemove); // ['c', 'd', 'e']
console.log(returnedItems) // ['a', 'b']

/*********** IV. Remove: Non-Mutating **************/
// since we will not be mutating, 
// use const
const arr10 = ['a', 'b', 'c', 'd', 'e'];

const arr20 = arr10.filter(a => a !== 'e'); // ['a', 'b', 'c', 'd']
// OR
const arr30 = arr10.filter(a => {
  return a !== 'e';
}); // ['a', 'b', 'c', 'd']
 
// use const
const arr100 = ['a', 'b', 'c', 'd', 'e'];
const arr200 = arr1.slice(1, 5) // ['b', 'c', 'd', 'e']
const arr300 = arr1.slice(2) // ['c', 'd', 'e']


/*********** V. Replace: Mutating **************/
// since the array will be mutated, 
// use 'let' rather than 'const'
let mutatingReplace = ['a', 'b', 'c', 'd', 'e'];
mutatingReplace.splice(2, 1, 30); // ['a', 'b', 30, 'd', 'e']
// OR
mutatingReplace.splice(2, 1, 30, 31); // ['a', 'b', 30, 31, 'd', 'e']
console.log(mutatingReplace.splice(0))
console.log(mutatingReplace.length)


/*********** VI. Replace: Non-Mutating **************/
// since we will not be mutating, 
// use const
const arr1000 = ['a', 'b', 'c', 'd', 'e']
const arr2000 = arr1.map(item => {
  if(item === 'c') {
    item = 'CAT';
  }
  return item;
}); // ['a', 'b', 'CAT', 'd', 'e']


