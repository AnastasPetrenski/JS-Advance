function focused() {
    //let arr = Array.from(document.querySelector('#panels').children);
    document.querySelectorAll('input').forEach(ele => {
        ele.addEventListener('focus', onFocus);
        ele.addEventListener('blur', onBlur);
    });

    function onFocus(ev){
        console.log(ev.target.parentNode);
        ev.target.parentNode.className = 'focus';
    }

    function onBlur(ev){
        ev.target.parentNode.className = '';
    }
}