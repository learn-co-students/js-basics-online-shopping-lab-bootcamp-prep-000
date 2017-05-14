var cart = [];

function getCart () {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var obj = {[item]:price}
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart () {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
  } else {
    console.log("In your cart, you have ");
    for (var item in cart) {
      console.log(`${item} at $${price}`);
    }
  }
}

function removeFromCart(item) {
  var foundIt = false
  for (var i = 0; i < cart.length; i++) {
    if (cart.hasOwnProperty(item)) {
      cart.splice(i,1)
      foundIt = true
    }
  }
  if (!foundIt) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(num) {
  if (num === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
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
