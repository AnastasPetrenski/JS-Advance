function toggle() {
    let button = document.querySelector('.button');
    let divExtra = document.getElementById('extra');

    const isHidden = button.textContent == 'More'
    divExtra.style.display = (isHidden) ? 'block' : 'none';
        
    button.textContent = (isHidden) ? 'Less' : 'More';
    console.log(button.textContent);
}