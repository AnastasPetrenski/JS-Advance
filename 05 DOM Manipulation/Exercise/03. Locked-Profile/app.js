function lockedProfile() {
    const main = document.getElementById('main').addEventListener('click', onClick);

    function onClick(ev){
        console.log(ev.target.parentNode)
        console.log(ev.target.clientWidth)
        console.log(ev.target.clientHeight)
        console.log(ev.target.value)
        console.log(ev.target.parentNode.querySelector('input[type=radio]:checked').value);
        
        if (ev.target.tagName == 'BUTTON' && !ev.target.parentNode.querySelectorAll('input')[0].checked) {
            const userFields = ev.target.parentNode.querySelector(('div[id*="HiddenFields"]'));
            console.log(userFields)
            
            ev.target.textContent = ev.target.textContent !== 'Show more' ? 'Show more' : 'Hide it';

            if (ev.target.textContent === 'Show more') {
                userFields.style.display = 'none';
            } else {
                userFields.style.display = 'block';
            }

        }
    }
}