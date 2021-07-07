var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100)
  item = { [itemName]: itemPrice}
  cart.push(item)
  var str = `${itemName} has been added to your cart.`
  console.log(str)
  return cart
}

function viewCart() {
  if(cart.length === 1) {
    var str = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(str)
  }
  else if(cart.length === 2) {
    var str = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
    console.log(str)
  }
  else if(cart.length != 0) {
    var str = "In your cart, you have"
    var i
    for(i = 0; i < (cart.length - 1); i++) {
      str = `${str} ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`
    }
    i = cart.length - 1
    str = `${str} and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
    console.log(str)
  }
  else console.log("Your shopping cart is empty.")
}

function total() {
  var tally = 0
  for(var i = 0; i < cart.length; i++) {
    tally = tally + parseInt(cart[i][Object.keys(cart[i])])
  }
  return tally
}

function removeFromCart(item) {
  var bool = false
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart = [...cart.slice(0, i), ...cart.slice(i + 1)]
      bool = true
    }
  }
  if (bool === false) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
