var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// 1.
function addToCart(item) {
  cart.push({[item] : Math.floor((Math.random() * 100) + 1)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

// 2.
function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var message = "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])
      var value = cart[i][key]

      if (i === 0) {
        message = `${message} ${key} at $${value}`
      } else if (i === 1 && i === cart.length - 1) {
        message = `${message} and ${key} at $${value}`
      } else if (i > 1 && i === cart.length - 1) {
        message = `${message}, and ${key} at $${value}`
      } else {
        message = `${message}, ${key} at $${value}`
      }
    }
    console.log(`${message}.`)
  }
}

function total() {
  var totalValue = 0
  for (var i = 0; i < cart.length; i++) {
    totalValue += cart[i][Object.keys(cart[i])]
  }
  return totalValue
}

function removeFromCart(item) {
  var foundItem = false

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      foundItem = true
      cart.splice(i,1)
    }
  }
  if (foundItem === false) {
    console.log("That item is not in your cart.")
  }
  return cart
}


function placeOrder(cardNumber) {
  var cartTotal = total()
  if (cardNumber != undefined) {
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}

// Sorry, we don't have a credit card on file for you.
// "Your total cost is $71, which will be charged to the card 83296759." and then empty the cart array
