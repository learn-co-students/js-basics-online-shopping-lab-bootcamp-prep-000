var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let min = 1
  let max = 100
  let random = Math.floor(Math.random() * (max - min)) + min
  
   var itemHash = {
     itemName: item,
     itemPrice: random
   }
   
   cart.push(itemHash)
   return `${cart[cart.length - 1].itemName} has been added to your cart.`
}

function viewCart() {
  function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty`
  } else {
    cartItems = []
    for(var i = 0; i < cart.length; i++){
       cartItems.push(
          '${cart[i].itemName} at $${cart[i].itemPrice}'
       )
    return `In your cart, you have ${cartItems}`
    }
  }        
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
