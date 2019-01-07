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

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var l = cart.length
  if (l === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var itemList = []
    for (let i = 0; i < l; i++) {
      var object = cart[i]
      var key = Object.keys(cart[i])
      var itemPrice = object[key]
      itemList.push(`${key} at $${itemPrice}`)
    }
    console.log(`In your cart, you have ${itemList.join(", ")}.`)
  }
}

function removeFromCart(item) {
  var l = cart.length
  var itemInCart = false
  for (let i = 0; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart.splice(i,1)
      return cart
    }
  }
  if (itemInCart === false ) {
      console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
