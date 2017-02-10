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
  var price = Math.random() * (100 - 0) + 0
  cart.push({[item]: Math.floor(price)})

  console.log(`${item} has been added to your cart.`)
  return cart

}

function viewCart() {
  var list = []
  if (cart.length === 0){
    console.log(`Your shopping cart is empty.`)
  } else {
    for (var n in cart) {
      list.push(` ${Object.keys(cart[n])} at $${cart[n][Object.keys(cart[n])]}`)
  }
      console.log(`In your cart, you have${list}.`)
  }
}
function removeFromCart(item) {
  for (var item in cart) {
    if (cart.hasOwnProperty(item)) {
      cart.splice(item)
    }
  }
  if (cart.hasOwnProperty(item) === false) {
    console.log(`That item is not in your cart.`)
  }
  return cart
}

function placeOrder (number) {
  var cardNumber = number
  if (number === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
