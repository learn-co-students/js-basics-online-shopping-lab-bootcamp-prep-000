var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 101)
  }
  cart.push(item)
  var message = `${item.itemName} has been added to your cart.`
  return message
}

function viewCart() {
  let i = 0
  while (i < cart.length) {
    var contents = ' you have '
    
    i++
  }
  return contents
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
