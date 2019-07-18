var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    var newItem = {itemName: (item),
                   itemPrice: (Math.floor(Math.random() * 6) + 1)};
	cart.push(newItem)
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
