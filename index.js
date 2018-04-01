var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  for(let i =0 ; i < cart.length; i++){
    if (cart[i].itemName === item ) {
      return (`${item} has been added to your cart`);
    }
  }
  var a = {}
  a.itemName = item 
  a.itemPrice = Math.floor(Math.random()*100 +1)
  cart.push(a)
  return cart
}

function viewCart() {
 if (!cart.length){
   return "Your shopping cart is empty."
 } 
   for(let i = 0; i<cart.length;i++) {
     var cart_itemName = []
     var cart_itemPrice = []
     cart_item.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
   }
   return `In your cart, you have ${cart_item.join(', and')}.`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
