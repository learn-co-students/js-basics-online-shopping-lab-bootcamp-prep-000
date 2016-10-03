/*
var cart = []
*/

var cart = [{iphone: 40}, {xbox: 200}]

function getCart() {
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

function addToCart(item) {
  console.log(item + " has been added to your cart.")
  var newthing = {}
  newthing[item] = Math.floor(Math.random()*100);
  cart.push(newthing)
  return cart
}

function viewCart() {
  var pretext = "In your cart, you have "
  var stuff = ""
  var lineoutput = ""
  if (cart.length > 0) {
    for (var i in cart) {
        stuff = stuff.concat(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `)
      }

      lineoutput = pretext.concat(stuff)
      lineoutput = lineoutput.slice(0, -2)
      lineoutput = lineoutput.concat(".")
      console.log(lineoutput)
    }

  else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item) {
  var isitthere = false
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      isitthere = true
    }
  }

  if (isitthere === true) {
    return cart
  }

  else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }

  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
