var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart[item] = Math.floor(Math.random() * 100) + 1
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var message = "In your cart, you have "
  for (var key in cart) {
    message += `${key} at $${cart[key]} and `
  }
  /*
  for (let i = 0; i < cart.length; i++) {
    if (cart.length == 0)
      return "Your shopping cart is empty."
    if (i < cart.length - 1)
      message += `${cart[i]} at $${cart[i]} and `
    else
      message += `${cart[i]} at $${cart[i]}.`
  }*/
  return message
}

function total() {
  var total = 0
  for (var key in cart) {
    total += cart[key]
  }
  /*
  for (i = 0; i < cart.length; i++) {
    total += cart[i]
  }*/
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
