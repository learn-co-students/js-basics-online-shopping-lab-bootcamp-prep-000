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

var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({item: price});
  var added = item + " has been added to your cart.";
  console.log( added );
}

function viewCart() {
  var i;
  var stuffInCart;
  for (i = 0; i < cart.length; i += 1) {
     "In your car you have" + cart[i]);
  }
  console.log(stuffInCart)
}
