var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
  var sum = 0;
  for (var i=0; i<cart.length; i++) {
    sum += cart[i][Object.keys(cart[i])];
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; ++i) {
    if (item == cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
    }
  return "That item is not in your cart."  
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return console.log("Sorry, we don't have a credit card on file for you.")
  }

  return console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
  return cart
}
