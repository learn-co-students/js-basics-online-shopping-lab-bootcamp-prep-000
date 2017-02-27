var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function viewCart() {
  if (cart.length == 0) {console.log("Your shopping cart is empty.")}
  else {
    var statement = []
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        if (i < l - 1) {
          statement[i] = `${item} at $${cart[i][item]}, `
        } else {
          statement[i] = `${item} at $${cart[i][item]}.`
        }
      }
    }
    statement.unshift("In your cart, you have ")
    console.log(statement.join(''))
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


function removeFromCart(itemName) {
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      if (cart[i].hasOwnProperty(itemName)) {
        cart.splice(i, 1)
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
}


function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
