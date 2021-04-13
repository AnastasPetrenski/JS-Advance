let myAssocArray = {
    'first': 1,
    'second': 2,
    'third': 3,
}

const keys = Object.keys(myAssocArray);

for (const key of keys) {
   console.log(key);
}

const values = Object.values(myAssocArray);

for (let value of values) {
    console.log(value);
}

const entries = Object.entries(myAssocArray)

for (let [key, value] of entries){
    console.log('key', key)
    console.log('values', value)
}

function cityRecord(name, population, treasury){
    const city = {
        name: name,
        population: population,
        treasury: treasury
    };

    return city;
}

console.log(cityRecord('Tortuga', 7000, 15000));


//Methods are reference type and can be 
const myObj = {
    firstName: 'Anastas',
    lastName: 'Petrenski',
    middleName: 'None',
    sayHi() {
        return 'Hi!'
    },
    fullName(){
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
}

console.log(myObj.fullName());

const sayHi = myObj.sayHi;
console.log(sayHi());

//fullName is out of his scope so this points to Global object who does not have this properties: 
//firstName and lastName and the are undefined. 
const fullName = myObj.fullName;
console.log(fullName());


const person = {
    firstName: 'Peter',
    lastName: 'Jhonson',
}

person.fullName = fullName;
console.log(person.fullName())
