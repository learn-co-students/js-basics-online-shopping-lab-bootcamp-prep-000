var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 10);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var cartString = [];
    for (var i = 0, l = cart.length; i < l; i++) {
      var cartObject = cart[i];
      var cartItem = Object.keys(cartObject);
      cartString.push(` ${[cartItem]} at $${cart[i][cartItem]}`);
    }
  } console.log(`In your cart, you have${cartString}.`);
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber) === false) {
    var total = 0;
    for (var i = 0, l = cart.length; i < l; i++) {
      var cartObject = cart[i];
      var cartItem = Object.keys(cartObject);
      total += cart[i][cartItem];
  } cart.splice(0);
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`);
} if (isNaN(cardNumber) === true) {
  console.log('We don\'t have a credit card on file for you to place your order.');
  }
}

function setCart(newCart) {
  cart = newCart;
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
