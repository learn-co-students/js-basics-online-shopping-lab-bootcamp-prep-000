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
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)

  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  var cartLength = cart.length, itemPrice = []

  if (cartLength === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    for (var i = 0; i < cartLength; i++) {
      for (var item in cart[i]) {
        itemPrice.push(` ${item} at $${cart[i][item]}`)
      }
    }
    console.log("In your cart, you have" + itemPrice.join() + ".")
  }
}

function removeFromCart(item) {
  var found = false

  for (var i = 0, l = cart.length; i < l; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      found = true
      return cart
    }
  }

  if (!found) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(creditCardNum) {
  if(creditCardNum == undefined && creditCardNum == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNum}.`)
  }
  cart = []
}
