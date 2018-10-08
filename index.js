var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
 var item = { itemName: name, itemPrice: (Math.floor((Math.random() * 100) + 1))};
 cart.push(item);
  return(`${name} has been added to your cart.`);
}


function viewCart() {
  if (cart.length === 0) {
    return ("Your shopping cart is empty."); 
  } else if (cart.length === 1) {
    return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`);
  } else if (cart.length === 2) {
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`);
  }}
  


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
