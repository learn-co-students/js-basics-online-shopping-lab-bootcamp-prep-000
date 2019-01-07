var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
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
