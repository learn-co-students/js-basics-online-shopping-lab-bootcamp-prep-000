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
 var price = Math.floor(Math.random()*100)+1
 var entry = {itemName: item, itemPrice : price} 
 cart.push(entry) 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) { 
    return "Your shopping cart is empty." 
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
    } else { 
  var sentence = "In your cart, you have " 
  for (let i = 0; i < cart.length; i++) {
    var item = cart[i]['itemName']
    var price = cart[i]['itemPrice']
    
    if (i === cart.length - 1) {
      sentence += `and ${item} at $${price}.`
    } else {
    sentence += `${item} at $${price}, `
  }
  }
  return sentence
  } 
}

function total() {
  // write your code here
  var total_val = 0
  for (let i = 0; i < cart.length; i++) {
    total_val += cart[i]['itemPrice']
  }
  return total_val
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i<cart.length; i++) {
    if (cart[i]['itemName'] === item) {
      cart.splice(i,1)
      return cart
    } 
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total() 
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}