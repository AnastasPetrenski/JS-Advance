function deleteByEmail() {
    const input = document.getElementsByName('email')[0].value;
    const table = document.querySelector('#customers').children[1].children;
    let result = document.getElementById('result');
    // NodeList converted to array
    const tableRows = Array.from(document.querySelectorAll('tbody tr')); 
    let isDeleted = false;

    for (const child of table) {
        if (child.children[1].textContent == (input)) {
            child.remove();
            isDeleted = true;            
        }
    }

    isDeleted ? result.textContent = 'Deleted.' : result.textContent = 'Not found.'
    
}