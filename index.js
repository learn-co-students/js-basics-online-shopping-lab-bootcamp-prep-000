var cart;
cart = [];
function setCart(newCart) {
  cart = newCart;
}
function gerCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() *100)
   cart.push ({[item]:price});
   console.log(item + " has been added to your cart.");
   return cart
 }

 function viewCart(){
   if(cart.length === 0) {
     console.log('Your shopping cart is empty.');
   } else {
     var itemsArray = [];
     for (var i = 0; cart.length > i ; i++) {
       var item = Object.keys(cart[i]);
       var itemPrice = cart[i][item];

       itemsArray.push(`${item} at $${itemPrice}`);
     }

     console.log(`In your cart, you have ${itemsArray.join(', ')}.`);
   }
 }
