function solve() {
   //[...document.querySelectorAll('button.add-product')].forEach(e => e.addEventListener('click', onClick));
   document.querySelector('button.checkout').addEventListener('click', onCheckout)
   let textArea = document.querySelector('textarea');
   const cart = [];

   document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
      if (ev.target.className === 'add-product') {
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('div.product-title').textContent;
         const price = Number(product.querySelector('div.product-line-price').textContent);

         textArea.value += `Added ${title} for ${price} to the cart.\n`;

         cart.push({ title, price })
      }

   });

   function onCheckout() {
      const result = cart.reduce((acc, c) => {
         if (!acc.titles.includes(c.title)) {
            acc.titles.push(c.title);
         }
         acc.totalPrice += c.price;
         return acc;
      }, {titles: [], totalPrice: 0});
      textArea.value += `You bought ${result.titles.join(', ')} for ${result.totalPrice.toFixed(2)}.\n`
   }

   function onClick(ev) {
      //console.log(ev.target.parentNode.parentNode.childNodes[3].childNodes[1].textContent)
      // const title = ev.target.parentNode.parentNode.querySelector('div.product-title').textContent;
      // const price = ev.target.parentNode.parentNode.querySelector('div.product-line-price').textContent;
      // cartInfo.push(`Added ${title} for ${price} to the cart.`);
      // textArea.value = cartInfo.join('\n');

      // products.push(Number(price));
      // if(!titles.includes(title)){
      //    titles.push(title);
      // }
   }

}