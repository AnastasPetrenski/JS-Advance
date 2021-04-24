function solve() {
    let sectionOpen = document.querySelector('h1.orange').parentNode.parentNode;
    let sectionInProgress = document.querySelector('h1.yellow').parentNode.parentNode;
    let sectionComplete = document.querySelector('h1.green').parentNode.parentNode;

    document.querySelector('#add').addEventListener('click', (ev) => {
        ev.preventDefault();
        let taskName = ev.target.parentNode.querySelector('#task').value;
        let description = ev.target.parentNode.querySelector('#description').value;
        let date = ev.target.parentNode.querySelector('#date').value;

        let task = createTask(taskName, description, date)
        sectionOpen.appendChild(task); 
    })

    function createTask(taskName, description, date, btnSection) {
        let div = e('div');

        let article = e('article');
        let h3 = e('h3', taskName);
        let desc = e('p', btnSection ? `${description}` : `Description: ${description}`);
        let dueDate = e('p', btnSection ? `${date}` : `Due Date: ${date}`);
        article.appendChild(h3);
        article.appendChild(desc);
        article.appendChild(dueDate);

        if (btnSection != 'complete') {
            let innerDiv = setButtons(btnSection);
            article.appendChild(innerDiv); 
        }

        div.appendChild(article);

        return div;
    }

    function e(type, content) {
        let result = document.createElement(type);
        result.textContent = content;

        return result;
    }

    function setButtons(btnSection) {
        let div = document.createElement('div');
        div.setAttribute('class', 'flex');

        let startBtn = document.createElement('button');
        let startColorBtn = btnSection ? 'red' : 'green'; 
        startBtn.setAttribute('class', startColorBtn);
        let startNameBtn = btnSection ? 'Delete' : 'Start'; 
        startBtn.textContent = startNameBtn;
        startBtn.addEventListener('click', next)

        let deleteBtn = document.createElement('button');
        let deleteColorBtn = btnSection ? 'orange' : 'red'; 
        deleteBtn.setAttribute('class', deleteColorBtn);
        let deleteNameBtn = btnSection ? 'Finish' : 'Delete'; 
        deleteBtn.textContent = deleteNameBtn;
        deleteBtn.addEventListener('click', clear);

        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        return div;
    }

    function clear(ev){
        
        if (ev.target.textContent == 'Finish') {
            let elements = Array.from(ev.target.parentNode.parentNode.children);
            let params = elements.map(x => x.textContent).splice(0,3);
            let task = createTask(...params, 'complete');
            sectionComplete.appendChild(task);
        } 
        
        ev.target.parentNode.parentNode.remove();   
    }

    function next(ev){
      
        if (ev.target.textContent == 'Start') {
            let elements = Array.from(ev.target.parentNode.parentNode.children);
            let params = elements.map(x => x.textContent).splice(0,3);
            let task = createTask(...params, 'inProgress');
            sectionInProgress.appendChild(task);
        } 
        
        ev.target.parentNode.parentNode.remove();
    }
}