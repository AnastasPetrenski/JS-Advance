function filter(employees, condition){
    let result = JSON.parse(employees);
    let gender = condition.split('-');

    return result.filter(person => 
        person[gender[0]] == gender[1]
    );
}

const result = filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);
for (const key in result) {
    console.log(`${key}. ${result[key]['first_name']} ${result[key]['last_name']} - ${result[key]['email']}`);
}