function printResult() {

    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    const result = `The sum is: ${Number(first) + Number(second)}`;
    const strResult = `Concat strings ${first + second}`;
    document.body.innerHTML += `<div>${result}</div>`;
    document.body.innerHTML += `<div>${strResult}</div>`;
    document.getElementById('area').value = [result, strResult].join('\n');

}

function result() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    const result = Number(first) + Number(second);

    document.getElementById('result').value = result;


}

function randomResult() {
    let num = Math.round(
        Math.random() * 100
    );

    document.getElementById("result").value = num;
}


function extractText() {
    const liElements = [...document.getElementsByTagName('li')];
    const elementText = liElements.map(x => x.textContent);

    document.getElementById('area').value = elementText.join('\n');
}

function clearText() {
    document.getElementById('area').value = '';
}

function parseJSON() {
    let input = JSON.parse(document.querySelector('#area').value);

    let objValues = [];
    for (const obj of input) {
        if(typeof obj == 'object'){
            let values = (Object.values(obj));
            let data = JSON.stringify(obj);
            objValues.push(values);
        } else {
            console.log(obj);
            objValues.push(obj);
        };
    }

    console.log(input);
    //let json = JSON.parse(input);
    document.getElementById('area').value = objValues.join('\n');

    //JSON.stringify Object.values()
    [{"Name":"Stamat", "Score":5.5},
    {"Name":"Rumen", "Score": 4.5}]
    //JSON.parse()
    ["Hutt - Pesho 500, Sasho 2000",
    "Victoria - Jo 3333, Seva 442"]

}

function showText() {
    
    const children = document.querySelector('#areaBtns').children[2];
    
    if (children.textContent.startsWith('Show')) {
        document.getElementById('area').style.display = 'inline';
        children.textContent = 'Hide text'   
    } else {
        document.getElementById('area').style.display = 'none';
        children.textContent = 'Show text'   
    }

    
}

function colorize() {
    [...document.querySelectorAll('table tr:nth-child(even)')].forEach(e => e.style.backgroundColor = 'green')

}

function totalSum() {
    let selector = [...document.querySelectorAll('table tr')].slice(0);
    let result = selector.reduce((a, c) => {
        return a += isNaN(Number(c.lastElementChild.textContent)) ? 0 : Number(c.lastElementChild.textContent);
    }, 0)



    let rows = document.querySelectorAll('table tr');

    let sum = 0;

    for (let i = 1; i < rows.length; i++) {
        let children = rows[i].children;
        sum += Number(children[children.length - 1].textContent);
    }

    document.getElementById('totalSum').value = result;
}

function getText() {
    const text = document.getElementById('text').textContent;

    const regex = /\((.+?)\)/gm;
    
    let match = regex.exec(text);

    let result = [];

    while (match !== null) {
        result.push(match[1]);
        match = regex.exec(text);
    }

    var printResult = result.join(',\n');

    document.getElementById('area').value = printResult;
}
