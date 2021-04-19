function search() {
   let i = 1;

   document.querySelectorAll('#searchBtn')[i].addEventListener('click', onClick)

   const trows = document.querySelectorAll('tbody tr')
   const body = document.querySelectorAll('tbody')[i];

   function onClick(){
      const input = document.querySelectorAll('#searchField')[i].value.toLowerCase();
      
      body.innerHtml = Array.from(body.children).map((row) => {
         if (row.textContent.toLowerCase().includes(input) && input != '') {
            row.classList.add('table-primary');
         } else {
            row.removeAttribute('class');
         }
         return row;
      });
      
      // for (const row of trows) {
      //    if(row.textContent.includes(input)) {
      //       row.setAttribute('class','table-primary')
      //       console.log(row.textContent)
      //    } else {
      //       row.removeAttribute('class')
      //    }
      // }
   }

}