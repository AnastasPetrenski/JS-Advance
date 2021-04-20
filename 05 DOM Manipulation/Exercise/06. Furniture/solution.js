function solve() {
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
