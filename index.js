// Define a global variable (use `var` at the top
// level) called `cart`. Initialize it as an empty array.
var cart = [];

// Define a function `getCart` that takes no arguments and returns the `cart`
function getCart() {
  return cart;
}
// Define a function `addToCart`. This function should accept one argument
// automatically set a price for this item by generating a random number
function addToCart(item) {
  console.log("item=" + item);
  var cost = Math.floor(Math.random() * 20);
  cart.push({[item]: cost});
  console.log(item + " has been added to your cart.");
  return cart;
}
// Define a function `viewCart`
// `"In your cart you have [item and price pairs]."`
// `"Your shopping cart is empty."`
function viewCart() {
  var output = "In your cart, you have ";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }
  for (var i = 0; i < cart.length; i++) {
    var punctuation = ", ";
    if (i === cart.length - 1) {
      punctuation = "."
    }
    var itemInCart = cart[i];
    var keys = Object.keys(itemInCart);
    var key = keys[0];
    var item = cart[i];
    var price = item[key];
    output += `${key} at $${price}` + punctuation
    console.log(output);
  }
}
// Define a function `removeFromCart` which accepts one argument
function removeFromCart(item) {
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      found = true;
    }
  }
  if (!found) {
    console.log("That item is not in your cart.");
  }
}

function setCart(newCart) {
  cart = newCart;
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
function placeOrder(ccNumber) {
  if (arguments.length === 0) {
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`);
  cart.length = 0;
}
