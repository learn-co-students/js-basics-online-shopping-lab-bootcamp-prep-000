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
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 var obj = {[item]: itemPrice};
 cart.push(obj)
  console.log(item + " has been added to your cart.");
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
  console.log ("Your shopping cart is empty.")
} 
  for (let i = 0; i < items.length; i++)
  cart.push(`In your cart ${item} at ${itemPrice[i]}`);
  return cart
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
