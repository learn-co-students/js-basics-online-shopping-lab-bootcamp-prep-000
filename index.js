var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var itemName = `${item}`
  item = { [itemName]: itemPrice }
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  var string = "In your cart, you have"
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    for (var i = 0; i <= cart.length - 1; i++) {
      var key = Object.keys(cart[i])
      string += ` ${key} at $${cart[i][key]}`
    }
  } else if (cart.length === 2) {
    for (var i = 0; i < cart.length - 1; i++) {
      var key = Object.keys(cart[i])
      string += ` ${key} at $${cart[i][key]}`
    }
  } else {
    for (var i = 0; i < cart.length - 1; i++) {
      var key = Object.keys(cart[i])
      string += ` ${key} at $${cart[i][key]},`
    }
  }
    if (cart.length >= 2) {
      string += ` and ${Object.keys(cart[cart.length - 1])} at $${cart[cart.length - 1][Object.keys(cart[cart.length - 1])]}`
      string.slice(0, string.length) + '.'
    }
  
  console.log(`${string.slice(0, string.length)}.`)
}

function total() {
  var currentTotalValue = 0
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])
    var cost = cart[i][key]
    currentTotalValue += cart[i][key] 
  } return currentTotalValue
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  } console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  }
}
