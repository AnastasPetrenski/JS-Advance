function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(ev){
        const input = ev.target.value;
        if(/^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/.test(input)){
            ev.target.className = '';
            console.log(true)
        } else {
            ev.target.className = 'error';
            console.log(false)
        }
    }
}