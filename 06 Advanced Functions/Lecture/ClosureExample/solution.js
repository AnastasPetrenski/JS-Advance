function solve() {
  const [generateBtn, buyBtn] = [...document.querySelectorAll('button')];
  const [input, output] = [...document.querySelectorAll('textarea')];
  const tBody = document.querySelector('table.table tbody');

  const furniture = [];
  
  generateBtn.addEventListener('click', (ev) => {
    const furnitureArr = JSON.parse(input.value.trim());
    tBody.innerHTML = '';
    furnitureArr.forEach(f => {
      const item = createRow(f);
      furniture.push(item);
      tBody.appendChild(item.element);
    });
  })

  buyBtn.addEventListener('click', (ev) => {
    furniture.forEach(e => console.log(e.getValues().name, e.isChecked()))
  })
  
  //function decoration or Partial Application
  const td = e.bind(null, 'td');

  function createRow(data){
    const img = e('img');
    img.src = data.img;

    const check = e('input');
    check.type = 'checkbox';

    const element =
     e('tr',
      e(e('td', img)),
      td(e('p', data.name)),
      td(e('p',data.price)),
      td(e('p',data.decFactor)),
      td(check)
    );

    return {
      element,
      isChecked,
      getValues
    }

    function isChecked(){
      return check.checked;
    }

    function getValues(){
      return data;
    }
  }

  function e(type, ...content){
    const result = document.createElement(type);

    content.forEach(e => {
      if (typeof e == 'string') {
        const node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });

    return result;
  }
}

function solve2() {
  const container = document.getElementById('container').addEventListener('click', (ev) => {
    const buttons = document.querySelectorAll('button');
    const areas = document.querySelectorAll('textarea');
    const tBody = document.querySelector('tbody');

    if (ev.target.tagName === 'BUTTON' && ev.target.textContent.toLowerCase() === 'generate') {
      const inputs = JSON.parse(areas[0].value);
      //console.log(inputs);
      for (const ele of inputs) {

        // console.log(Object.entries(ele))
        // var keys = Object.keys(ele);
        // for (const key of keys) {
        //   console.log(ele[key])
        // }

        const row = createElement('tr');

        const cellImage = createElement('td', 'img', 'src', ele.img);
        const cellName = createElement('td', 'p', ele.name);
        const cellPrice = createElement('td', 'p', ele.price);
        const cellDecor = createElement('td', 'p', ele.decFactor);
        const cellCheck = createElement('td', 'input', 'type', 'checkbox');

        row.appendChild(cellImage);
        row.appendChild(cellName);
        row.appendChild(cellPrice);
        row.appendChild(cellDecor);
        row.appendChild(cellCheck);

        tBody.appendChild(row);
      }

    } else if (ev.target.tagName === 'BUTTON' && ev.target.textContent.toLowerCase() === 'buy') {
      const rows = Array.from(tBody.querySelectorAll('input[type=checkbox]:checked'))
        .map(row => Array.from(row.parentNode.parentNode.children));

      let result = {
        items: [],
        totalPrice: 0,
        decFactor: 0
      };

      for (const row of rows) {
        if (!result.items.includes(row[1].textContent)) {
          result.items.push(row[1].textContent);
        }
        result.totalPrice += Number(row[2].textContent);
        result.decFactor += Number(row[3].textContent)
      }

      areas[1].value = `Bought furniture: ${result.items.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decaration factor: ${result.decFactor / rows.length.toFixed(2)}`;

    }

    function createElement(type, attribute, ...content) {
      const cell = document.createElement(type);

      if (attribute) {
        const child = document.createElement(attribute);
        content.length > 1 ?
          child.setAttribute(content[0], content[1]) :
          child.textContent = content;
        cell.appendChild(child);
      }

      return cell;
    }
  })

}
