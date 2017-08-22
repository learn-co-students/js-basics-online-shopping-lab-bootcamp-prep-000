var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice
  itemPrice = Math.floor((Math.random() * 100) +1)
  var obj = {}
  obj[item] = itemPrice
  cart.push(obj)
  console.log(item + " has been added to your cart.")
  return cart
  }

function viewCart() {
  var emptyArray = []
  var lastItem
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    for (var i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        var cartObject = cart[0]
        var cartKey = Object.keys(cartObject)[0]
        var keyValue = cartObject[cartKey]
        console.log(`In your cart, you have ${cartKey} at $${keyValue}.`)
      }
      if (cart.length === 2) {
        var cartObject = cart[0]
        var cartObjectTwo = cart[1]
        var cartKey = Object.keys(cartObject)[0]
        var cartKeyTwo = Object.keys(cartObjectTwo)[0]
        var keyValue = cartObject[cartKey]
        var keyValueTwo = cartObjectTwo[cartKeyTwo]
        console.log(`In your cart, you have ${cartKey} at $${keyValue} and ${cartKeyTwo} at $${keyValueTwo}.`)
      }
      if (cart.length > 2) {
        var cartObject = cart[i]
        var cartKey = Object.keys(cartObject)[0]
        var keyValue = cartObject[cartKey]
        emptyArray.push(` ${cartKey} at $${keyValue}`)
      }
    }
    lastItem = emptyArray.pop()
      console.log(`In your cart, you have${emptyArray.join()}, and${lastItem}.`)
}
  }

function total() {
  var addUp = 0
  for (var i = 0; i < cart.length; i++) {
    var cartKey = Object.keys(cart[i])[0]
    var keyValue = cart[i][cartKey]
    addUp = addUp + keyValue
  }
  return addUp
}

function removeFromCart(item) {
  var found = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      found = true
    }
  }
  if (found === false)
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
}
