var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// expected output: 1 to 100 for max = 100
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function addToCart(item) {
   var newItem = {
    itemName: item,
    itemPrice: getRandomInt(100)
  }
  cart.push(newItem)
  return item + " has been added to your cart."
}

function viewCart() {
 var message
  if (cart.length === 0) {
    message = "Your shopping cart is empty."
  } else {
    message = "In your cart, you have "
    if (cart.length === 1) {
      message += cart[0].itemName + " at $" + cart[0].itemPrice + "."
    } else {
      for (var i = 0; i < cart.length; i++) {
        if (i < cart.length - 1) {
          message += cart[i].itemName + " at $" + cart[i].itemPrice + ", "
        } else {
          message += "and " + cart[i].itemName + " at $" + cart[i].itemPrice + "."
        }
      }
    }    
  }
  return message
}

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var result = cart.length
  // var sabit = -1
  for (var i =0; i < cart.length; i++) {
    // console.log("counter1: " + (i + 1))
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      // sabit = i
      // console.log("i = " + i)
    }
  }
  if (result === cart.length) {
    result = "That item is not in your cart."
  } else {
    // cart.splice(i, 1)
    result = cart
  }
  return result
}

function placeOrder(cardNumber) {
  var message
  const cartTotal = total()
  if (cardNumber / cardNumber === 1) {
    message = "Your total cost is $" + cartTotal + ", which will be charged to the card " + cardNumber + "."
    cart = []
  } else {
    message = "Sorry, we don\'t have a credit card on file for you."
  }
  return message
}







