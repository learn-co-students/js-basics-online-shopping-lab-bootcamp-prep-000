var cart = []

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
  var price = Math.floor(Math.random() * 101)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var newCart = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      newCart += `${item} at $${cart[i][item]}`
      if (i === cart.length - 1) {
      newCart += (".")
    }
    else {
      newCart += (", ")
    }
    }
  }
  console.log(newCart)
  }
}

function removeFromCart(item) {
  var foundIt = false
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart) {
      if (cart.hasOwnProperty(item) === true) {
        cart.splice(cart[i],1);
      }
      else {
        foundIt = true
      }
    }
  }
  if (foundIt = false || cart.length === 0) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    }
  else {
    console.log("We don\'t have a credit card on file for you to place your order.")
  }
  cart.length = 0
  return cart
}
