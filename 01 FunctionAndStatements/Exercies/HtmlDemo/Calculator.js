function printResult() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    const result = Number(first) + Number(second);
    const strResult = first + second;
    document.body.innerHTML += `<div>${result}</div>`;
    document.body.innerHTML += `<div>${strResult}</div>`;
}

function randomResult(){
    let num = Math.round(
        Math.random() * 100
    );

    document.body.innerHTML += `<div>${num}</div>`;
}