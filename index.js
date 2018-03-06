var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {[item]: Math.floor((Math.random() * 100) + 1)}
 console.log(`${item} has been added to your cart.`)
 cart.push(newItem)
 return cart
}

function viewCart() {
  // write your code here
  for (var i=0;i<=cart.length;i++){
    var inCart = "In your cart, you have";
    inCart+cart[i]
    console.log(inCart)
  }
  
  return inCart;
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
addToCart("apples");
viewCart();