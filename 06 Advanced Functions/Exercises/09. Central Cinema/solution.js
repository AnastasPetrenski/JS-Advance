function solve() {
    const inputs = document.querySelector('div#container').children;
    const elements = Array.from(inputs).slice(0, inputs.length - 1);
    const onScreenBtn = inputs[inputs.length - 1];
    const addToArchive = document.querySelector('#archive>ul');
    document.querySelector('#archive>button').addEventListener('click', clear)
    
    function archive(ev) {
        let li = ev.target.parentNode.parentNode;
        let div = ev.target.parentNode;
        
        if (Number(div.children[1].value) > 0) {
            let archiveLi = document.createElement('li');

            let span = document.createElement('span');
            span.textContent = li.children[0].textContent; 

            let totalPrice = Number(div.children[1].value) * Number(div.children[0].textContent);
            let strong = document.createElement('strong');
            strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
            
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', (ev) => {
                ev.target.parentNode.remove();
            });

            archiveLi.appendChild(span);
            archiveLi.appendChild(strong);
            archiveLi.appendChild(deleteBtn);

            addToArchive.appendChild(archiveLi);
            li.remove();
        }
    }

    let movies = [];

    // const btns = document.querySelector('body').addEventListener('click', (ev) => {
    //     if (ev.target.tagName == 'BUTTON' && ev.target.textContent == 'Archive') {
    //         let childrens = Array.from(ev.target.parentNode.children);
    //         console.log(ev.target)
    //         //let element = movies.pop(x => Number(x['input'].value) > 0);
    //         //console.log(element);
    //         if(Number(childrens[1].value) > 0) {
    //             ev.target.parentNode.remove();
    //             console.log(movies.forEach(x => x == ev.target))
    //         }
    //         //console.log(Number(ev.target.value));
    //     }
    // })


    onScreenBtn.addEventListener('click', (ev) => {
        ev.preventDefault();

        let name = inputs[0].value;
        let hall = inputs[1].value;
        let price = Number(inputs[2].value);

        if (!name || !hall || !price ||
            isNaN(price)) {
            return;
        }

        let movie = createMovie(name, hall, price);
        //movies.push(movie);
        document.querySelector('#movies>ul').appendChild(movie);


        inputs[0].value = '';
        inputs[1].value = '';
        inputs[2].value = '';

    })

    function createMovie(name, hall, price) {
        let li = document.createElement('li');

        let span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);

        let strong = document.createElement('strong');
        strong.textContent = `Hall: ${hall}`;
        li.appendChild(strong);

        let div = document.createElement('div');

        let divStrong = document.createElement('strong');
        divStrong.textContent = price.toFixed(2);

        let input = document.createElement('input');
        input.setAttribute('placeholder', 'Tickets Sold');

        let button = document.createElement('button');
        button.textContent = 'Archive';
        button.addEventListener('click', archive)

        div.appendChild(divStrong);
        div.appendChild(input);
        div.appendChild(button);

        li.appendChild(div);

        return li;
    }

    function clear(ev){
        ev.target.parentNode.children[1].textContent = '';
    }

    
}