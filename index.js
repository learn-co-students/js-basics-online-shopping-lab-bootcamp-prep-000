var cart = []

function addToCart(item) {
  cart.push({ [item]: Math.floor(Math.random() * 100) })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function getCart() {
  return cart
}

function placeOrder(cc) {
  if (cc == null) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
    cart = []
    return cart
  }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    for (let j in cart[i]) {
      if (j === item) {
        cart.splice(i, 1)
        return cart
      }
    }
  }
  console.log('That item is not in your cart.')
}

function setCart(newCart) {
  cart = newCart
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

function viewCart() {
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  } else {
    let text = 'In your cart, you have'
    for (let i = 0; i < cart.length; i++) {
      for (let j in cart[i]) {
        text += ` ${j} at $${cart[i][j]}`
        if (i == cart.length - 1) {
          text += '.'
        } else {
          text += ','
        }
      }
    }
    console.log(text)
  }
}
