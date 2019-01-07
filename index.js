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

var cart = []

function getCart() {
  return cart
}

function addToCart(item){
  var price = Math.floor((Math.random() * 100));
  var obj = {[item]:price}

  cart.push(obj)
  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    var array = []
    for (var i = 0, l = cart.length; i < l; i++) {
      var item = Object.keys(cart[i])[0]
      array.push(`${item} at $${cart[i][item]}`)
    }
    console.log(`In your cart, you have ${array.join(', ')}.`)
  }
}


function removeFromCart(itemName){
  var foundItem = false

  for (var i = 0, l = cart.length; i < l; i++) {

    if (cart[i].hasOwnProperty(itemName) === true) {
      foundItem = true
    }

    if (foundItem === true) {
      cart.splice(i, 1)
      console.log(cart)
    }
  }

  if (foundItem === false) {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
