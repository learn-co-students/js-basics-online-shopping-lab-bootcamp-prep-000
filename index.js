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
 var random = Math.floor(Math.random() * 100)
 var obj = new Object({itemName: item, itemPrice: random})
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var statement = "In your cart, you have "
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    let i = 0
    for (i = 0; i < cart.length - 1; i++) {
      statement += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    if (cart.length != 1) {
      statement += 'and '
    }
    statement += `${cart[i].itemName} at $${cart[i].itemPrice}.`
  }
  return statement
}

function total() {
  // write your code here
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var cost = total()
    cart.length = 0;
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
