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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push( {[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
  console.log('Your shopping cart is empty.');
} else {
  var array = [];
  for (var i = 0, l = cart.length; i < l; i++) {
    var cartName = Object.keys(cart[i]);
    array.push(` ${cartName} at $${cart[i][cartName]}`);
    }
  console.log(`In your cart, you have${array}.`);
  }
}

function removeFromCart(itemRemove) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(itemRemove)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log ('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
