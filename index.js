var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = {itemName: item, itemPrice: Math.floor(Math.random() * 101)};
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
  var item = {itemName: name, itemPrice: Math.floor(Math.random() * 101)}
  cart.push(item)
}

function viewCart() {
  for (var counter = 0; counter < cart.length; counter++) {

  }
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
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
