var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor((Math.random() * 100)+1)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    var msg = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      msg += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      if (i === cart.length - 2) {
        msg += ", and ";
      } else if (i === cart.length -1) {
        msg += ".";
      } else {
        msg += ", ";
      }
    }
    return msg;
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  var index = -1;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    return "That item is not in your cart.";
  } else {
    return cart.splice(index, 1);
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) return "Sorry, we don't have a credit card on file for you.";
  var sum = total();
  cart = [];
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}
