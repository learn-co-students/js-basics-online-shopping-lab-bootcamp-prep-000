var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var c = {itemName: `${item}`, itemPrice: (Math.floor((Math.random()*1000)+1))
  
 cart.push(item.name = item);
 cart.push(item.price =  Math.floor((Math.random()*1000)+1))

}

function viewCart() {
  // write your code here
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
