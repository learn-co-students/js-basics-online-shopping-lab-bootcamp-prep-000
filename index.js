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

function getCart() {
  return cart
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

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var len = cart.length
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return
  }
  var item;
  var price;
  var message = "In your cart, you have"
  for (var i = 0; i < len; i++) {
    item = Object.keys(cart[i])
    price = cart[i][item]
    message += ` ${item} at $${price}`
    if (i < len - 1) {
      message += ","
    } else {
      message += "."
    }
  }
  console.log(message)
  return
}

function removeFromCart(item) {
  var len = cart.length
  for (var i = 0; i < len; i++) {
    if (item === Object.keys(cart[i])[0]) {
      cart = [...cart.slice(0, i), ...cart.slice(i + 1)]
      return
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
