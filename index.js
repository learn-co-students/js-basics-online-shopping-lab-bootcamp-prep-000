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
 var newItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * Math.floor(100))
 }
 cart.push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  var summary = `In your cart, you have `
  for (var i = 0; i < cart.length; i++) {
    summary += `${cart[i].itemName} at $${cart[i].itemPrice}`
    if (i < cart.length - 1) {
      summary += `, `
    }
    if (i === cart.length - 2) {
      summary += `and `
    }
  }
  return `${summary}.`
}

function total() {
  // write your code here
  var value = 0 
  for (var i = 0; i < cart.length; i++) {
    value += cart[i].itemPrice
  }
  return value
}

function removeFromCart(item) {
  // write your code here
  var deleteItem = -1
  for (var i = 0; i < cart.length; i ++) {
    if (cart[i].itemName === item) {
      deleteItem = i
    }
  }  
  if (deleteItem === -1) {
    return `That item is not in your cart.`
  } 
  cart.splice(deleteItem, 1)
  return cart
  }
  
  function placeOrder(cardNumber) {
    if (!cardNumber) {
      return `Sorry, we don't have a credit card on file for you.`
    }
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return message
  }