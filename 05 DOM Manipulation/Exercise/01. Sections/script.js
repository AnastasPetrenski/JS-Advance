function create(words) {
   const content = document.getElementById('content');
   // content.addEventListener('click', (ev) => {
   //    console.log(ev.target)
   //    //if (ev.target.textContent.startsWith('Section') || ev.target.tagName === 'P'){
   //    if (ev.target != ev.currentTarget) {
   //       const tagElement = ev.target.children[0] || ev.target;
   //       const isVisible = tagElement.style.display === 'block';
   //       tagElement.style.display = isVisible ? 'none' : 'block';
   //    }
   // });

    content.addEventListener('mouseover', (ev) => {
       console.log(ev.target, ev.currentTarget)
      if (ev.target.tagName == 'DIV' && ev.target != ev.currentTarget) {
         ev.target.firstChild.style.display = 'block';
         console.log('DIV over')
      } else if (ev.target.tagName === 'P') {
         ev.target.style.display = 'block';
         console.log('P over')
      }
   });

   content.addEventListener('mouseout', (ev) => {
      if (ev.target.tagName == 'DIV' && ev.target != ev.currentTarget) {
         ev.target.firstChild.style.display = 'none';
         console.log('DIV out')
      } else if (ev.target.tagName === 'P') {
         ev.target.style.display = 'none';
         console.log('P out')
      }
   });


   for (let i = 0; i < words.length; i++) {
      const p = createElement('p', words[i]);
      p.style.display = 'none';

      const div = createElement('div');
      div.className

      div.appendChild(p);
      content.appendChild(div);
   }

   console.log(content);
}

function createElement(type, content) {
   const element = document.createElement(type);
   element.textContent = content;
   return element;
}