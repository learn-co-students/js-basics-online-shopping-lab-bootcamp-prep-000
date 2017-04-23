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

function addToCart (item) {
  let price = Math.floor(Math.random() * 10000) / 100
  let itemandprice = {[item]: price}
  console.log(`${item} has been added to your cart.`)
  cart.push(itemandprice)
  return cart
}

function viewCart () {
  const itemsandprices = []
  let l = cart.length
  if (!l) {
    return console.log("Your shopping cart is empty.")
  }
  else {
    for (let i = 0; i < l; i++) {
      var item = Object.keys(cart[i])
      var price = cart[i][item]
      itemsandprices.push(`${item} at \$${price}`)
    }
    console.log(`In your cart, you have ${itemsandprices.join(', ')}.`)
  }
}

function removeFromCart (item) {
  let itemincart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if(cart[i].hasOwnProperty(item)) {
      itemincart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
    return cart
  }
    if (!itemincart) {
      console.log("That item is not in your cart.")
    }
}

function placeOrder (cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  }
