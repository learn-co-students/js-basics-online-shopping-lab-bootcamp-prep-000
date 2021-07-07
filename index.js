var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addToCart(item) {
  console.log(`${item} has been added to your cart.`)
  item = {[item]: getRandomInt(100)}
  cart.push(item)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }
  else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][`${Object.keys(cart[0])}`]}.`)
  }
  else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][`${Object.keys(cart[0])}`]} and ${Object.keys(cart[1])} at $${cart[1][`${Object.keys(cart[1])}`]}.`)
  }
  else {
    var cartString = ""
      cartString += `In your cart, you have `
      for (var i = 0; i < cart.length; i++) {
        var cartItem = cart[i]
        var cartItemKey = Object.keys(cartItem)
        var cartItemPrice = Object.values(cartItem)
        if (i < (cart.length - 1)) {
        cartString += `${cartItemKey} at $${cartItemPrice}, `
        }
        else {
          cartString += `and ${cartItemKey} at $${cartItemPrice}.`
          console.log(cartString)
        }
        }
      }
}


function total() {
  var tot = 0
  for (var i = 0; i < cart.length; i++) {
    var cartItem = cart[i]
        var cartItemPrice = Object.values(cartItem)
    tot += parseInt(cartItemPrice)
  }
  return tot
}

function removeFromCart(item) {
  var cartLiteral = []
  for (var i = 0; i < cart.length; i++) {
    var cartItem = cart[i]
    var cartItemKey = Object.keys(cartItem)
    var cartItemPrice = Object.values(cartItem)
    cartLiteral.push(cartItemKey.toString())
  }
  if (cartLiteral.includes(item)) {
    var REMOVE = cartLiteral.indexOf(item)
    cart.splice(REMOVE, [1])
    console.log(cart)
  }
  else {
    console.log("That item is not in your cart.")
  }
}




function placeOrder(cardNumber) {
  if (cardNumber) {
  var returnOrder = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  console.log(returnOrder)
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
