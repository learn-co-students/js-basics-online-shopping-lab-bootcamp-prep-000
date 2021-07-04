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
 var itemObject = {}
 var price = Math.floor(Math.random()*100) + 1
 itemObject.itemName = item
 itemObject.itemPrice = price
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } 
  if (cart.length === 1) {
    return `In your cart, you have ${cart['itemName']} at $${cart['itemPrice']}.`
  } /*if (cart.length === 2) {
    let output = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      output += `${} at $${}, and ${i+1} at $${i+1}.`
    }
    return output
  } else {
    return output +=
  } */
}

function total() {
  // write your code here
  return // add up all itemPrice
}

function removeFromCart(item) {
  /* write your code here
  if (object is in cart) {
    remove
  }
  else {
    return "That item is not in your cart." */
  }

function placeOrder(cardNumber) {
  // write your code here
  if (no) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = []
    return `Your total cost is $${}, which will be charged to the card ${}`
  }
}
