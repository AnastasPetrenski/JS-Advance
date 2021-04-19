function addItem() {
    let itemText = document.getElementById('newItemText').value;
    let itemValue = document.getElementById('newItemValue').value;

    let selector = document.getElementById('menu');
    let addItem = `<option value="${itemValue}">${itemText}</option>`;
    selector.innerHTML += addItem;

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = "";

    console.log('TODO:...');
}