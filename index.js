var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
  // If you want to use a dynamically named property, you need to use array access notation:
  cart.push({[item] : Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var message = 'In your cart, you have '
  if (cart.length > 0) {
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        // If not the last item
        if (i != cart.length - 1) {
          message += `${item} at $${cart[i][item]}, `
        }
        else {
          message += `${item} at $${cart[i][item]}.`
        }
      }
    }

    console.log(message)
  }
  else {
    console.log('Your shopping cart is empty.')
  }

  return cart
}

function removeFromCart(item) {
  var hasItem = false

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        hasItem = true
    }
  }

  if (!hasItem) {
    console.log('That item is not in your cart.')
  }

  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }

  cart = []
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
