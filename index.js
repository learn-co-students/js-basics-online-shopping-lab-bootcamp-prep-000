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
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return
  }

  var status = 'In your cart, you have'
  for (var i = 0, size = cart.length; i < size; i++) {
    var key = Object.keys(cart[i])[0]
    status += ` ${key} at $${cart[i][key]}`
    if (i < size - 1) {
      status += ','
    }
  }
  status += '.'
  console.log(status)
}

function removeFromCart(itemName) {
  for (var i = 0, size = cart.length; i < size; i++) {
    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(i, 1)
      return
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) === 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.")
    return
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart.splice(0, cart.length)
}
