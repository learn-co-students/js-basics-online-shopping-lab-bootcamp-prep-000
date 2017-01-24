var cart = []

function setCart (newCart) {
  cart = newCart
}

function total () {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart (item) {
  cart.push({ [item]: Math.floor((Math.random() * 101)) })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function getCart () {
  return cart
}

function viewCart () {
  if (cart.length) {
    let itemPrice = []
    for (let i = 0, l = cart.length; i < l; i++) {
      const item = Object.keys(cart[i])[0]
      itemPrice.push(` ${item} at $${cart[i][item]}`)
    }
    console.log(`In your cart, you have${itemPrice}.`)
  } else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart (item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    var cartItems = Object.keys(cart[i])[0]
    if (cartItems === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder (cardNumber) {
  if (typeof (cardNumber) !== 'number') {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (let i = 0, l = cart.length; i < l; i++) {
      cart.pop()
    }
  }
}
