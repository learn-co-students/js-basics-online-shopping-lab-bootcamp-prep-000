var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {}
  newItem[item] = Math.floor(Math.random()*101)
  cart.push(newItem)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var message = "In your cart, you have "
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length == 1) {
    message = message + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + "."
    console.log(message)
  } else if (cart.length == 2) {
    message = message + Object.keys(cart[0]) + " at $" + cart[0][Object.keys(cart[0])] + " and " + Object.keys(cart[1]) + " at $" + cart[1][Object.keys(cart[1])] + "."
    console.log(message)
  } else {
    var lastIndex = cart.length-1
    var lastObject = cart[lastIndex]
    var lastKey = Object.keys(lastObject)
    var lastKeyValue = lastObject[lastKey]
    for (var i=0;i<cart.length-1;i++) {
      for (var key in cart[i]) {
        message = message + key + " at $" + cart[i][key] + ", "
      }
    }
    message = message + "and " + lastKey + " at $" + lastKeyValue + "."
    console.log(message)
  }
}

function total() {
  var total = 0
  for (var i=0;i<cart.length;i++) {
    for (var key in cart[i]) {
      total = total + cart[i][key]
    }
  }
  return total
}

function removeFromCart(item) {
  getCart()
  var itemIsFound = false
  for (var i=0;i<cart.length;i++) {
    var currentKey = Object.keys(cart[i])[0]
    for (var key in cart[i]) {
      if (currentKey == item) {
        cart.splice(i,1)
        itemIsFound = true
      } else {
        //do nothing
      }
    }
  }
  if (itemIsFound == false) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber == undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
  console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")
  cart.length = 0
}
