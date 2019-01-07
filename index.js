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
  var price = Math.floor(Math.random()*100);
  getCart().push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return getCart();
}

function viewCart() {
  //Cart is empty
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }

  var cartObjects = {}; // Holding Extracted Objects
  var array = [];

  for (var i = 0; i < cart.length; i++) {
    cartObjects = cart[i]
    var items = Object.keys(cartObjects)
    for( var j = 0; j < items.length; j++)
    {
      array[i] = ` ${items[j]} at $${cartObjects[items[j]]}`;
    }
  }
  return console.log(`In your cart, you have${array}.`)
}

function removeFromCart(item) {
  var cartObjects = {}; // Holding Extracted Objects
  var insideCart = false;
  var positionInCart = 0; // indec of item in cart

  for (var i = 0; i < cart.length; i++) {
    cartObjects = cart[i]
    if (cartObjects.hasOwnProperty(item)) {
      var insideCart = true;
      positionInCart = i;
    }
  }

  if (!insideCart) {
    return console.log('That item is not in your cart.')
  }
  else {
    cart.splice(positionInCart, 1)
    return cart;
  }
}

function placeOrder(cardNumber) {
  console.log(cardNumber)
  var t; // Total if checking out
  if (cardNumber === undefined) {
    return console.log(`We don\'t have a credit card on file for you to place your order.`)
  }
  else {
    t = total();
    cart = []
  }
  return console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
}
