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
  function generatePrice() {
    var price = Math.random()
    price = Math.floor(price)
  }
  var object = {item: generatePrice()}
  cart.push(object)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  function cartKeys() {
    let keys = []
    for (var key = cart.keys(cart[i]), i = 0, l = cart.length; i < l; i++) {
      keys.push(key)
      return keys
    }
  }
  if (cart.length < 1) {
      console.log("Your shopping cart is empty.")
  } else {
    let cartView = []
    for (var i = 0, l = cart.length; i < l; i++) {
      for (cartKeys()[i] in cart[i]) {
        cartView.push(`${cartKeys()[i]} at $${cart[i]}`)
      }
    }
      console.log(`In your cart you have ${cartView}.`)
  }
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return cart.splice(i, 1)
    }
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
