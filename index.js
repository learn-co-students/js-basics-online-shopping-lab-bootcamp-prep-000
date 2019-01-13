var cart = [];

function getCart(){
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var object = {
    itemName: item, 
    itemPrice: price
  }
  cart.push(object)
  return `${object.itemName} has been added to your cart.`;
}

function viewCart() {
  list = []
  for (var i = 1; i < 100; i++) {
    list.push(`${cart.itemName} at ${cart.itemPrice})`)
  }
  
  return `In you cart, you have 
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
