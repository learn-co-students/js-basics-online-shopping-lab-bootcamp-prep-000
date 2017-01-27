var cart = []

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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  if(cart.length >= 1) {
    var cartPairs = []
    for (var i = 0, l = cart.length; i < l; i++) {
      var key = Object.keys(cart[i])[0]
      var value = cart[i][key]
      cartPairs.push(` ${key} at $${value}`)
    }
    console.log(`In your cart, you have${cartPairs}.`)
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item) {
  for (var item in cart) {
    if (cart.hasOwnProperty(item)) {
      delete cart[item];
      var newCart = cart.filter(Boolean);
      return newCart
    }
    else {
      console.log("That item is not in your cart.")
    }
  }
}
