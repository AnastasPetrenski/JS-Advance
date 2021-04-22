let arr = [0, 1, 2, 3, 4];
arr.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue
}, 10)
console.log(arr.join(', '))


let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})

for (const name in countedNames) {
    console.log(name, countedNames[name]);
}
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Alice', age: 19 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (acc[key] == undefined) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }
  
  let groupedPeople = groupBy(people, 'name')

// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }]
  
  // allbooks - list which will contain all friends' books +
  // additional list contained in initialValue
  let allbooks = friends.reduce(function(accumulator, currentValue) {
    return [...accumulator, ...currentValue.books]
  }, [])

  console.log(allbooks.join('\n'))

  //Remove duplicate items in an array
  let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
  let orderedArray = Array.from(new Set(myArray)).sort((a, b) => a.localeCompare(b));
  console.log(orderedArray.join(', '))

  let myOrderedArray = myArray.reduce(function (acc, curr) {
    if (acc.indexOf(curr) === -1) {
        acc.push(curr);
    }
    return acc
  }, []);

  console.log(myOrderedArray.join(', '));

  //Replace .filter().map() with .reduce()
  const numbers = [-5, 6, 2, 0,];
  const positiveNumbers = numbers.reduce(function (acc, curr) {
    if (curr > 0) {
        acc.push(curr);
    }
    return acc;
  }, [])

  console.log(positiveNumbers.join(', '))
