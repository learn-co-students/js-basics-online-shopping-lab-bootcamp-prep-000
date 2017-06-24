var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {[item]: Math.floor(Math.random() * 100)}
  cart.push(itemObj)

  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var message = "In your cart, you have"
    for (let i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])
      var price = cart[i][key]

      if (i === 0) {
        message = `${message} ${key} at $${price}`
      } else if (i === 1 && i === cart.length - 1) {
        message = `${message} and ${key} at $${price}`
      } else if (i === cart.length - 1) {
        message = `${message}, and ${key} at $${price}`
      } else {
        message = `${message}, ${key} at $${price}`
      }
    }
    message = `${message}.`
    console.log(message)
  }
}

function total() {
  if (cart.length === 0) {
    return 0
  } else {
    var totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
      var key = Object.keys(cart[i])
      var price = cart[i][key]
      totalPrice += price
    }
    return totalPrice
  }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var totalPrice = total()
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
