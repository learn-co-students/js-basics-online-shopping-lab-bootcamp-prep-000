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
 cart.push({itemName: item, itemPrice: (Math.floor(Math.random() * 100))})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var outputString = "In your cart, you have"
  //var i;
  if (cart.length === 0) {
      outputString = "Your shopping cart is empty."
    }
  else {
  for (let i = 0; i < cart.length; i++) {
  if (cart.length === 1) {
      outputString += ` ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
    }
       else if (i === cart.length - 1) {
      outputString += ` and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
    }
    else {
      outputString += ` ${getCart()[i].itemName} at $${getCart()[i].itemPrice},`
    }
  }
  }
  return outputString
}

function total() {
  // write your code here
  var totalCost = 0
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  var statement
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1)
      statement = true
    }
    else {}
  }
  if (statement === true) {
    return cart
  }
  else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var outputString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart.length = 0;
    return outputString
  }
}
