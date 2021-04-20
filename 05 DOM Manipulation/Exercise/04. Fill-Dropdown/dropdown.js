function addItem(ev) {
    const text = document.getElementById('newItemText').value;
    const value = document.getElementById('newItemValue').value;
    console.log(text, value);

    const element = createElement('option', text, value)
    console.log(element)

    const menu = document.getElementById('menu');
    menu.appendChild(element);
    console.log(menu)

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = "";
}

function createElement(type, text, value){
    const element = document.createElement(type);
    element.setAttribute('value', value);
    element.textContent = text;
    return element;
}