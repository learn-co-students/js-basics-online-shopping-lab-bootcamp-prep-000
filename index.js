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
  let newOject = {};
  let value = Math.floor(Math.random() * 101);
  newOject[item] = value;
  cart.push(newOject);
  console.log(`${item} has been added to your cart.`);
  getCart();
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  }
  let stringer = "";
  for (let index = 0; index < cart.length - 1; index++) {
    stringer = stringer + "you have " + cart[index].key + " at $" + cart[index].value;
  }
  stringer = stringer.toString();
  console.log(`In your cart, ${stringer} and ${cart[cart.length-1].key} at $${cart[cart.length-1].value}.`);

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
