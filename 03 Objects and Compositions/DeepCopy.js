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

const array2 = [{myObj}];

let array = [{Name:"Stamat", Score:5.5},
                {Name:"Rumen", Score: 4.5}];

function deepCopy(target){
    if (Array.isArray(target)) {
        return target.map(deepCopy);
    } else if (typeof target == 'object') {
        return [...Object.entries(target)]
                .reduce((a, [k, v]) => Object.assign(a, {[k]: deepCopy(v)}), {});
    } else {
        return target;
    }
}

const arr = deepCopy(array);
console.log(arr);

const arr1 = deepCopy(array2);
console.log(arr1);

const result = deepCopy(myObj);
console.log(result);
