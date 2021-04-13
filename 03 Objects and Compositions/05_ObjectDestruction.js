const student = {
    firstNmae: 'Pesho',
    lastName: 'Petrov',
    age: 22,
    location: { lat: 42.698, lng: 69.236}
}

console.log(student.location.lat);

const department = {
    name: 'Engineering',
    data: {
        director: {
            name: 'John',
            position: 'Director'
        },
        emplpyees: [{name: 'Joro', position: 'QA'},
                    {name: 'Nas', position: 'Seller'}
        ],
        company: ['Build', 'Terra', 'Bank']
    }
}

const {data: {director}} = department;
console.log(director);

const {data: {emplpyees}} = department;
for (const employee of emplpyees) {
    console.log(`Name: ${employee.name}, position: ${employee.position}`);
    console.log(employee);
}

//names char[] of one name 'Build'
const {data: {company: [names]}} = department;
for (const name of names) {
    console.log(name);    
}

let stringove = [
    {position: 'QA', name: 'Nas'},
    {position: 'Sales', name: 'Vas'}
];
  
const [{position}] = stringove;
console.log(position)

