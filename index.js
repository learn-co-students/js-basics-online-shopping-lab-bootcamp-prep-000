var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var randomize = Math.random() * 100 + 1;
  var itemPrice = Math.floor(randomize);
  var itemObject = { [item]: itemPrice }
  cart.push(itemObject);
  console.log( `${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(0 === cart.length) {
      console.log('Your shopping cart is empty.');
    } else {
        for (var i = 0; i < cart.length; i++) {
          var list = [];
          list.push(`${cart[i]['key']} at ${cart[i]['value']`);
        }
        console.log(`In your cart, you have ${list}.`);
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
