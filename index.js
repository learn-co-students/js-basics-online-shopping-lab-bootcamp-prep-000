var cart = [];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(newItem) {
  var price = Math.floor(Math.random() * 100)
  cart.push({ [newItem]: price })
  console.log(`${newItem} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var message = "In your cart, you have "
    for (var i = 0; i < cart.length; i++ ) {
      for (var item in cart[i]) {
        message += `${[item]} at $${cart[i][item]}`
        if (i === (cart.length - 1)) {
          message += "."
          console.log(message)
        } else {
          message += ", "
        }
      }
    }
  }
}

function removeFromCart(item) {
  var counter = 0
  var isInCart = false
  while (counter < cart.length && isInCart === false) {
    if (cart[counter].hasOwnProperty(item)) {
      cart.splice(counter, 1)
      isInCart = true
    }
  }
  if (isInCart === false) {
    console.log("That item is not in your cart.")

  } else {
    return cart
  }
}

function placeOrder(creditCardNumber) {
  if (creditCardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
    cart = []
  }
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
