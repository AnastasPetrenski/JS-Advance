function attachEventsListeners() {
    let button = document.getElementById('counter');

    const myObj = {
        counter: 0,
        increment(){
            console.log(this);
            myObj.counter++;
            //this points to button so we have to use myObj
            button.value = myObj.counter; 
        }
    }

    myObj.increment();

    document.querySelector('#ulContent').addEventListener('click', onclick);
    document.querySelector('#items').addEventListener('click', (ev) => {
        if (ev.target.tagName === 'A') {
            ev.target.parentNode.remove();
        };
    });
    document.querySelector('#sort').addEventListener('click', sort);
    document.querySelector('input[name="input"]').addEventListener('change', onChange);
    button.addEventListener('click', myObj.increment);
    button.addEventListener('focus', onFocus);
    button.addEventListener('blur', onBlur);
    button.addEventListener('change', onChange);

    function onChange(ev){
        console.log(ev.target.value);
        if (/^[A-Z][a-z]+$/.test(ev.target.value)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }

    function onFocus(ev){
        ev.target.className = 'focus';
    }

    function onBlur(ev){
        ev.target.className = '';
    }

    function counter(event){
        const btn = event.target;
        const value = Number(btn.value);
        btn.value = value + 1;
    }

    function sort(){
        let array = [...document.querySelectorAll('#numbers>li')];
        let uList = document.querySelector('#numbers');
        let elements = [...uList.children];
        array.sort((a, b) => Number(a.textContent) - Number(b.textContent));
        array.forEach(li => uList.appendChild(li));
    }

    function onclick(ev) {
        //select input field and read input value
        const input = document.querySelector('input').value;

        if (/^[A-Z][a-z]+$/.test(input)) {
            //ev.target.className = '';
        //create new <li> element
        const liElement = document.createElement('li');
        //set text of new element 
        liElement.textContent = input;

        const deleteBtn = document.createElement('a');
        let linkText = document.createTextNode('[Delete]');
        deleteBtn.appendChild(linkText);
        deleteBtn.href = '#';
        // remove.addEventListener('click', (ev) => {
        //     ev.target.parentNode.remove();
        // })

        liElement.appendChild(deleteBtn);
        
        //select list from page
        const list = document.querySelector('ul');
       
        //append new element
        list.appendChild(liElement);
        } 
    }

//     function remove() {
//         const liElement = document.getElementById('li-to-delete');

//         liElement.parentNode.removeChild(liElement);
//     }
}