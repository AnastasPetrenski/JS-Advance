function solve() {
  const container = document.getElementById('container').addEventListener('click', (ev) => {
    const buttons = document.querySelectorAll('button');
    const areas = document.querySelectorAll('textarea');

    if (ev.target.tagName === 'BUTTON' && ev.target.textContent.toLowerCase() === 'generate') {
      const input = JSON.parse(areas[0].value);
      const products = input. 
    } else if (ev.target.tagName === 'BUTTON' && ev.target.textContent.toLowerCase() === 'buy'){
      console.log(ev.target.textContent)
    }

   
  })

}