function search() {
   let list = Array.from(document.querySelectorAll('#towns>li'));
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let count = 0;
   for (const li of list) {
      if (li.textContent.toLowerCase().includes(input.toLowerCase()) && input != '') {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         count++;
      } else  {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
      
      if (count > 0) {
         result.textContent = `${count} matches found`
      }
      
   }

   console.log(count);
}