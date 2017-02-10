var cart = []


function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*101)
  cart.push({[item]:price})
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  }
  else {
    var itemCosts = []
    for (var i = 0, l = cart.length; i < l; i++) {
      var cartItems = []
      cartItems.push(Object.keys(cart[i]))
      for (var cartItems in cart[i]) {
        itemCosts.push(` ${cartItems} at $${cart[i][cartItems]}`)
      }
    }
    console.log(`In your cart, you have${itemCosts}.`)
  }
}

function removeFromCart(remove) {
  var checkPoint = cart.length
  for (var i = 0, l = cart.length; i < l; i++) {
    var cartItems = []
    cartItems.push(Object.keys(cart[i]))
    if (`${cartItems[i]}` === remove) {
      cart.splice(i, 1)
    }
  }
  if (checkPoint === cart.length) {
    console.log('That item is not in your cart.')
  }
  else {
    return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  while (cart.length != 0) {
    cart.pop()
  }
}

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
