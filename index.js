// Learn.co Bootcamp Prep 16 JavaScript Online Shopping Lab

// Initialise global variable to empty array.
var cart = [];


// Define a function, 'setCart', that takes an array, 'newCart', as a parameter.
// Set variable 'cart' equal to 'newCart'.
function setCart(newCart) {
  cart = newCart;
}


// Define a function, 'total', with no parameters.
// Iterate over the items in 'cart', add their prices and return the total.
function total() {
  let total = 0;
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      total += cart[i][item];
    }
  }
  return total;
}


// Define a function, 'getCart', with no parameters.
// Return 'cart'.
function getCart() {
  return cart;
}


// Define a function, 'addToCart', with one parameter, 'item', that the
// customer wants to purchase.
// Set a price for the item.
// Add the item and price to the 'cart' array as an object.
// Print 'item added to cart' message.
// Return the cart.
function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}


// Define a function, 'viewCart', with no parameters.
// Loop over each item in the cart and print 'in your cart' message.
// If cart is empty, print 'empty cart' message.
function viewCart() {
  var numItems = cart.length;
  if (numItems === 0) {
    var message = "Your shopping cart is empty.";
  } else {
    var message = "In your cart, you have ";
    for (var i = 0; i < numItems; i++) {
      for (var item in cart[i]) {
        if (i < numItems - 1) {
          message += `${item} at $${cart[i][item]}, `;
        } else {
          message += `${item} at $${cart[i][item]}.`;
        }
      }
    }
  }
  console.log(message);
}


// Define a function, 'removeFromCart', with one parameter, 'item', that the
// customer wants to remove from their cart.
// If the item isn't in the cart, print 'not in cart' message.
// If the item is in the cart, remove the item object from the cart array.
// Return the cart.
// *** check each object's key to see if it matches parameter (hasOwnProperty)
function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i);
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}


// Define a function, 'placeOrder', with one parameter, 'cardNumber', the
// customer's credit number.
// If no parameter is received, print 'no card on file' message.
// Else, print 'total cost will be charged to card' message.
// Empty cart.
function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
