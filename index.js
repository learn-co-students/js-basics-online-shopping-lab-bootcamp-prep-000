var cart = []
var item = "Fork"



function getCart() {
return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
var price = Math.random()
var itemPrice = {item: price}
cart.push(itemPrice)
console.log(item + " has been added to your cart.")
return cart
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
  //cart[i][item]
if (cart.length > 0) {
for (var i = 0; cart.length > i; i++) {
  console.log(`In your cart, you have socks at $${socksCost}, puppy at $${puppyCost}, iPhone at $${iPhoneCost}.`)
  return cart
}
} else {
console.log('Your shopping cart is empty.')
}
}


function removeFromCart(item) {
// see the test of placeOrder for code hint.
  if (cart.hasOwnProperty(item)) {
  cart = [...cart.slice(0, item-1),...cart.slice(item+1, cart.length)]
//
} else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(ccNumber) {
if (ccNumber > 0) {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
} else{
  console.log('We don\'t have a credit card on file for you to place your order.')
}
}

function emptyCart() {
cart = []
}
