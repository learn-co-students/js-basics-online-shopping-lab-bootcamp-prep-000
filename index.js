var cart = {}
var keys = Object.keys(cart)
var keyIndex = []

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
  function generatePrice() {
    var price = Math.random()
    Math.floor(price)
    return price
  }
  var object = {item: generatePrice()}
  cart.push(object)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
  } else {
    for (keys in cart) {
    console.log(`In your cart you have ${keys} at $${cart[keys]}.`)
    }

  }
}

function removeFromCart(item) {
  if (cart.hasOwnProperty(item)) {
    delete cart[item]
  } else {
    console.log("That item is not in your cart.")
  }
}
