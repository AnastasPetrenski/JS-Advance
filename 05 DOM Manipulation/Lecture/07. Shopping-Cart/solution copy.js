function solve() {
   //Array.from(document.querySelectorAll('div.product')).forEach(e => e.querySelector('button.add-product').addEventListener('click', onClick));
   [...document.querySelectorAll('button.add-product')].forEach(e => e.addEventListener('click', onClick));
   document.querySelector('button.checkout').addEventListener('click', onCheckout)
   let textArea = document.getElementsByTagName('textarea')[0];
   let products = [];
   let titles = [];
   let cartInfo = [];

   function onClick(ev){
      //console.log(ev.target.parentNode.parentNode.childNodes[3].childNodes[1].textContent)
      const title = ev.target.parentNode.parentNode.querySelector('div.product-title').textContent;
      const price = ev.target.parentNode.parentNode.querySelector('div.product-line-price').textContent;
      cartInfo.push(`Added ${title} for ${price} to the cart.`);
      textArea.value = cartInfo.join('\n');
      
      products.push(Number(price));
      if(!titles.includes(title)){
         titles.push(title);
      }
   }

   function onCheckout(){
      const totalPrice = products.reduce((a, b) => a + b, 0);
      textArea.value += `\nYou bought ${titles.join(', ')} for ${totalPrice.toFixed(2)}.`
   }
}