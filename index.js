var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*99+1)
  var newItem = {[item]: itemPrice}
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    console.log ("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  } else if (cart.length === 2) {
    console.log (`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else if (cart.length > 2) {
    var cartList = []
    for (var i = 0; i + 1 < cart.length; i++) {
      cartList.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`)
    }
    var lastItem = cart.slice(-1)
    console.log(`In your cart, you have ${cartList.join(" ")} and ${Object.keys(lastItem[0])} at $${lastItem[0][Object.keys(lastItem[0])]}.`)
  }
}

function total() {
  // write your code here
  var runTot = 0
  for (var i = 0; i < cart.length; i++){
    runTot = runTot + cart[i][Object.keys(cart[i])]
  }
  return runTot
}

function removeFromCart(item) {
  // write your code here
  var itemExists = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      itemExists = true
    }
  }
  if (!itemExists) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var cartTotal = total()
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
