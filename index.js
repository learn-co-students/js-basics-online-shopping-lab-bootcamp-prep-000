var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName : item, itemPrice : getRandomInt(100)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var cartview = 'In your cart, you have ';
  if (cart.length === 0) {
    cartview = 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
    cartview = cartview + `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`;
  } else if (cart.length === 2) {
    cartview = cartview + `${cart[0]['itemName']} at $${cart[0]['itemPrice']}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`;
  } else if (cart.length > 2) {
    for (var i = 0; i < cart.length; i++) {
      if (i != cart.length - 1) {
        cartview = cartview + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
      } else {
        cartview = cartview + `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
      }
    }
  }
  return cartview;
}

function total() {
  // write your code here
  var completed = 0;
  for (var i = 0; i < cart.length; i++) {
    completed = completed + cart[i]['itemPrice'];
  }
  return completed;
}

function removeFromCart(item) {
  // write your code here
  var exists = 0
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]['itemName'] === item && exists === 0) {
      cart.splice(i, 1);
      exists = 1
      return cart;
    }
  }
  if (exists === 0) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  // write your code here
  var totally = total();
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total cost is $${totally}, which will be charged to the card ${cardNumber}.`;
  }
}
