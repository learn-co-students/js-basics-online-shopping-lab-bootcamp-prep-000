var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var itemPrice = {};
  itemPrice[item] = price;
  cart[cart.length] = itemPrice;
  console.log(`${item} has been added to your cart.`);
  return cart
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function removeFromCart(item) {
  var l = cart.length;
  for (var i = 0; i < l; i++) {
    var items = cart[i];
    if (items.hasOwnProperty(item)) {
      cart.splice(i,1);
    }
  }
  if (l === cart.length) {
    console.log(`That item is not in your cart.`);
  }
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  else {
    var array = [];
    for (var i = 0, l = cart.length; i < l; i++) {
      array[i] = [` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`];
    }
    console.log(`In your cart, you have${array}.`);
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
  return
}
