function func(){
    console.log(this);
}

//Global invoke - func()
func()

//Object method - object.func()
const myObj = {
    name: 'Peter',
    func,
    outerFunc() {
        console.log(this);
        //{name: 'Peter', func: ƒ, outerFunc: ƒ}

        
        const arrowFunc = () => {
            console.log(this);
            //{name: 'Peter', func: ƒ, outerFunc: ƒ}
        }
        
        arrowFunc();
        myFunc();

        function myFunc(){
            console.log(this);
            //global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …}
        }
    }
}
myObj.func()

myObj.outerFunc()

//DOM event - element.addEventListener()
document.querySelector('button').addEventListener('click', func)

//when we are Executing func() its context is the place where we executed it
//When we are Executing arrowFunc() its context is the place where we declared id
