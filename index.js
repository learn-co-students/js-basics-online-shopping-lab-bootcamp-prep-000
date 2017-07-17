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
 var price = Math.floor(Math.random() * (100 - 1) + 1);
 var newItem = {[item]: price};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var message = "";
  if (cart.length > 0) {
    message = "In your cart, you have ";
  } else {
    message = "Your shopping cart is empty";
  }
  for (var i = 0; i < cart.length; i++) {
    var name = Object.keys(cart[i])[0];
    if (cart.length == 2 && i == 1) {
      message += " ";
    }
    if (cart.length > 1 && i == cart.length - 1) {
      message += "and "
    }
    message += `${name} at $${cart[i][name]}`
    if (cart.length > 2 && i < cart.length - 1) {
      message += ", ";
    }
  }
  message += ".";
  console.log(message);
}
/* addToCart("ham");
addToCart("pineapple");
addToCart("juice");
addToCart("bananas");
console.log(removeFromCart("bananas")); */

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var name = Object.keys(cart[i])[0];
    total += cart[i][name];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var theTotal = total();
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${theTotal}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
