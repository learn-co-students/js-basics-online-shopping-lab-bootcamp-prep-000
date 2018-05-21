var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {}
  newItem['itemName'] = item
  newItem['itemPrice'] = Math.floor(Math.random()*100)
  cart.push(newItem)
  return item + " has been added to your cart."

}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  }
  else {
  var newString = "In your cart, you have"
  for (let i = 0; i < cart.length-1; i++) {
    newString = `${newString} ${cart[i]['itemName']} at $${cart[i]['itemPrice']},`
  }
  newString = `${newString} and ${cart[cart.length-1]['itemName']} at $${cart[cart.length-1]['itemPrice']}.`
  }
  
  return newString
}

function total() {
  var counter = 0
  for (let i = 0; i < cart.length;i++) {
    counter += cart[i]['itemPrice']
  }
  return counter
}

function removeFromCart(item) {
  if (cart.length === 0) {
     return "That item is not in your cart."
  }
  else {
  for (let i =0; i < cart.length; i++) {
    if (cart[i]['itemName'] === item) {
      cart.splice(i,1)
      return cart
    }
  }
  }
    return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
