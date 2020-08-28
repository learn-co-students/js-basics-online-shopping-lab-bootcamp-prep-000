var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function priceGenerator() {
    var fprice = Math.random();
    var sprice = (fprice * 100) + 1;
    return Math.floor(sprice);
  }
  var itemInfro = {`itemName`: `${item}`, `itemPrice`: `${priceGenerator()}`};
}

function viewCart() {
  // write your code here
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
