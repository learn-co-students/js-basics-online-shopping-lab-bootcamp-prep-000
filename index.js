var cart;

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
  var object = {item: price}
  cart.push(object)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

let keys = []

  for (var key = cart.keys(cart[i]), i = 0, l = cart.length; i < l; i++) {
    keys.push(key)
  }
  if (cart.length < 1) {
      console.log("Your shopping cart is empty.")
  } else {
    let cartView = []
    for (var i = 0, l = cart.length; i < l; i++) {
      for (keys[i] in cart[i]) {
        cartView.push(`${keys[i]} at $${cart[i]}`)
      }
    }
      cartView = cartView.join(", ")

      console.log(`In your cart you have ${cartView}.`)
  }
}

function removeFromCart(item) {
  var foundIt = false
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      foundIt = true
    }
  }
  if (foundIt === false || cart.length === 0) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNum) {
  if (cardNum === null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNum}.`)
    cart = []
  }
}
