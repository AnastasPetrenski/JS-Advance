//lanbda declaration () => this points to add
const add = (a) => {
    let sum = 0;
    sum += a;
    console.log("add", this)

    //function declaration () this points to global
    function calc (b) {
        sum += b
        console.log('calc', this)
        return calc;
    }

    calc.toString = () => sum;
    return calc;
}

console.log(add(1)(2).toString());