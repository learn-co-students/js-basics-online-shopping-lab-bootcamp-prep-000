var cart = [];

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
  var price = Math.random() * 100
  price = Math.floor(price)
  cart.push({[item]: price})
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  if (cart.length > 0) {
    var message = ''
    for (var i = 0; i < cart.length - 1; i++) {
      for (var key in cart[i]) {
        message = message + key + ` at $${cart[i][key]}, `
      }
    }
    for (var key in cart[cart.length - 1]) {
      message = message + key + ` at $${cart[i][key]}.`
    }
    message = "In your cart, you have " + message
    console.log(message)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart (item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (arguments.length == 0) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0, cart.length)
  }
}