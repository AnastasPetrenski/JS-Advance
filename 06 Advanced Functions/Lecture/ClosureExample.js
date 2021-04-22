function createRectangle(width, height) {
    return {
        getWidth,
        setWidth,
        getHeight,
        getArea,print
    }

    function getWidth() { return width; }
    function setWidth(value) { 
        width = value;
    }
    function getHeight () { return height; }
        
    function getArea () { return width * height }
}

const myRect = createRectangle(5, 4)
myRect.width = 8; //replace function 
myRect.getHeight = 1;
console.log(myRect);
console.log(myRect.getArea());
console.log(myRect.getWidth()); 
console.log(myRect.getHeight); //getWidth() throw error

myRect.setWidth(10);
console.log(myRect.getWidth())
console.log(myRect.getArea());

/*************************************************/
const nasko = {
    name: 'Nasko',
    sayName () {
        console.log(this.name)
    }
}

function solve(){
    let name = 'solve';

    return sayName;

    function sayName () {
        let name = 'Pesho'
        console.log(this.name);
        console.log(name);
    }
}

nasko.sayName()

const func = nasko.sayName.bind(nasko);
func();

const x = solve();
x();