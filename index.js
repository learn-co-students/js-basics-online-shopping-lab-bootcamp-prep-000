var cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function total() {
  var t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += Number(cart[i][item])
    }
  }
  return t
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100)
  let o = {}
  o[item] = price
  cart.push(o)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  let myCart = []
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      let o = cart[i]
      for (var key in o) {
        myCart.push(` ${key} at $${o[key]}`)
      }
    }
    console.log(`In your cart, you have${myCart}.`)
    return cart
  } else {
    console.log(`Your shopping cart is empty.`)
  }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    let o = cart[i]
    if (o.hasOwnProperty(item)) {
      cart.splice(i, 1)
    }
  }
  console.log(`That item is not in your cart.`)
}

function placeOrder(ccn) {
  if (ccn) {
    console.log(
      `Your total cost is $${total()}, which will be charged to the card ${ccn}.`
    )
    cart = []
  } else {
    console.log(
      `We don't have a credit card on file for you to place your order.`)
  }
}
