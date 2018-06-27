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
 var itemObject = { itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1 } 
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
}

function total() {
  // write your code here
  var totalPrice = 0
  if (cart.length === 1) {
    totalPrice += cart[0].itemPrice
  } else if (cart.length === 2) {
    totalPrice = cart[0].itemPrice + cart[1].itemPrice
  } else if (cart.length === 3) {
    totalPrice = cart[0].itemPrice + cart[1].itemPrice + cart[2].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  var cartLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
  }
  if (cartLength === cart.length) {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
  var totalCost = total()
  cart.splice(0)
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}