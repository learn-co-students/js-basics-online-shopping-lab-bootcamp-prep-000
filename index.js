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
  cart.push({[item]: Math.floor(Math.random() * 10)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var pairs = []
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        pairs.push(`${key} at $${cart[i][key]}`)
      }
  }
    console.log(`In your cart, you have ${pairs.join(', ')}.`)
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key === item) {
        return cart.splice(i, 1)
      }
    }
  }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var total = 0
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i])
      total += cart[i][key]
    }
  }
  cart = []
  console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`)
}
