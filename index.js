var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100);
    console.log(`${item} has been added to your cart.`)
    var testHold = {}
    testHold[item] = price
    cart.push(testHold)
    return cart
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

function viewCart() {
    if (cart.length > 0) {
      var cartItems = Object.keys(cart)
      for (var i = 0, l = cartItems.length; i < l; i++) {
        console.log(`In your cart, you have ${cartItems[i]} at $${cart[cartItems[i]]}.`)
      }
    }
    else {
        console.log("Your shopping cart is empty.")
    }
}

function removeFromCart(item) {
    if (cart.length > 0) {
        cart = []
    }
    else {
        console.log("That item is not in your cart.")
    }
}

function placeOrder(ccNumber) {
    if (ccNumber > 0) {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
      cart = []
    }
    else {
        console.log("We don't have a credit card on file for you to place your order.")
    }
}
