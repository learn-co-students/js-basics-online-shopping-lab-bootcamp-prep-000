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
  return cart
}

function addToCart(product) {
  var price = Math.floor((Math.random() * 100));
  cart.push( {[product]: price} );
  console.log(`${product} has been added to your cart.`);
  return cart
}

function viewCart() {
  var ini = "In your cart, you have";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0, l = cart.length; i < l; i++) {
      var cartItem = Object.keys(cart[i]);
      var item = cart[i];
      ini += ` ${cartItem[0]} at $${item[cartItem[0]]},`
    }
    ini = ini.slice(0, -1);
    ini += ".";
    console.log(ini)
  }
}

function removeFromCart(product) {
  var previous = cart.length;
  var current = [];
  for (let i = 0, l = cart.length; i < l; i++) {
    var cartItem = Object.keys(cart[i]);
    if (cartItem[0] !== product) {
      current.push(cart[i])
    }
  }
  setCart(current);
  if (cart.length === previous) {
    console.log("That item is not in your cart.")
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("We don\'t have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart
  }
}
