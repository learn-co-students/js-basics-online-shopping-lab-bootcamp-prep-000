var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomPrice(min, max) {
    return parseInt(Math.random() * (max-min) + min);
  }
  cart.push({ [item]: getRandomPrice(1, 100) });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  for(var i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      console.log("In your cart, you have " + cart[0][0] + "at $" + cart[0][1]);
    }
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
