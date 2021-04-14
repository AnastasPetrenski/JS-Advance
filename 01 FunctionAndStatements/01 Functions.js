function running(){
    return "Running";
}

function category(run, type){
    console.log(run() + ' ' + type);
}

category(running, "sprint");

function hypotenuse(a, b)
{
    function square(num){
        return num * num;
    }

    return Math.sqrt(square(a) + square(b));
}

console.log(hypotenuse(3, 4));