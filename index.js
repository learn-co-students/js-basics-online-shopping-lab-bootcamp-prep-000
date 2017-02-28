var cart = []

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var object = {}
  var price = Math.floor(Math.random() * 100)

  object[item] = price
  cart.push(object)
  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  var line = "In your cart, you have "

  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
       line = i < cart.length - 1 ? line + `${item} at $${cart[i][item]}, ` : line + `${item} at $${cart[i][item]}.`
      }
    }
    console.log(`${line}`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item) {
  var flag = false

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      flag = true
    }
  }

  if (flag === false) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
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
