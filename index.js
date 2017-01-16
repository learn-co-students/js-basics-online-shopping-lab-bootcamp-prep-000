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
  var price = Math.floor(100 * Math.random())
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var talley = 'In your cart, you have'
    for (let i = 0; i < cart.length; i++) {
      for (let item in cart[i]) {
        talley = talley + ` ${item} at $${cart[i][item]},`
      }
    }
    console.log(talley.slice(0,-1)+'.')
  }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    for (let key in cart[i]) {
      if (key === item) {
        cart = [...cart.slice(0,i),...cart.slice (i+1)]
        return cart
      }
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
    return
  }
}
