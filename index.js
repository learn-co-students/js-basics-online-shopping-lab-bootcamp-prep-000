var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var newItem = {[item]: price};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}  

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else if (cart.length === 1) {
    var items = Object.getOwnPropertyNames(cart);
    console.log(`In your cart, you have ${items[0]} at ${cart[0]}.`);
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
