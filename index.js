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

 
