var cart;

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
  var price = Math.floor(Math.random() * 100)
  var itemPrice = {[item]: price}
  cart.push(itemPrice)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
let keys = []
let cartView = []
let stringView = ""
  for (var i = 0, l = cart.length; i < l; i++) {
    keys.push(Object.keys(cart[i])[0])
  }
    if (cart.length) {
      for (var i = 0, l = cart.length; i < l; i++) {
          cartView.push(`${keys[i]} at $${cart[i][keys[i]]}`)
        }
      stringView = cartView.join(", ")
      console.log(`In your cart, you have ${stringView}.`)
    } else {
      console.log("Your shopping cart is empty.")
    }
}

function removeFromCart(item) {
  var foundIt = false
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      foundIt = true
    }
  }
  if (foundIt === false || cart.length === 0) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNum) {
  if (cardNum) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNum}.`)
    cart = []
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
