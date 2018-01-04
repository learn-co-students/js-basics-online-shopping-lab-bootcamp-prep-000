var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.random;
  cart.push({ [itemName]: itemPrice});
}

function placeOrder() {

}

function total() {}
