//USING - call()/ apply()/ bind()
const myObj = {
    name: 'Peter',
    myMethod(){
        console.log('My name is ' + this.name)
    }
}

function myFunc(a, b){
    console.log(this);
    console.log(a, b);
}
//points to Global
myFunc(5, 3);
//call => points to myObj
myFunc.call(myObj, 7, 8);
//apply => points to myObj
myFunc.apply(myObj, [6, 13]);
//bind => points to myObj       //can set first, all or none params to be const
const boundFunc = myFunc.bind(myObj, 0);
boundFunc(1);

const funcRef = myObj.myMethod;
const boundRef = myObj.myMethod.bind(myObj);
//funcRef don`t points to myObj
funcRef();
boundRef();
//composed functions points to the object which compose it
myObj.composedFunc = myFunc;
myObj.composedFunc(6, 6)

document.querySelector('button').addEventListener('click', myObj.myMethod.bind(myObj));