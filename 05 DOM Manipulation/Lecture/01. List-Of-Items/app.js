function addItem() {
    const liElement = document.createElement('li');

    liElement.textContent = document.querySelector('#newItemText').value;

    document.querySelector('#items').appendChild(liElement);

    document.querySelector('#newItemText').value = '';
}