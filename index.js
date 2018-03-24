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

function getCart() { return cart; }

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100);
  var item = {[itemName]: itemPrice};
  cart.push(item);
  console.log(`${itemName} has been added to your cart.`);

  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var itemName = '';
    var msg = 'In your cart, you have';
    for (var i in cart) {
      itemName = Object.keys(cart[i]);
      msg += ` ${itemName} at $${cart[i][itemName]},`;
    }
    console.log(msg.slice(0, -1) + '.');
  }
}

function removeFromCart(itemName) {
  for (var i in cart) {
    if (cart[i].hasOwnProperty(itemName)) {
      cart.splice(i, 1);
      return cart;
    }
  }

  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (arguments.length === 0) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }

  cart.length = 0;
}
