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
 var newCost = Math.floor(Math.random() * Math.floor(100));
 var newItem = {"itemName": item, "itemPrice": newCost};
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var i = 1;
  var message = "";
  // write your code here
  if (cart.length === 0) {
    message = "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    message = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else {
    message = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    for (i; i < cart.length; i ++) {
      message = `${message}, ${((i === cart.length - 1) ? 'and ' : '')}${cart[i].itemName} at $${cart[i].itemPrice}${((i === cart.length - 1) ? '.' : '')}`;
    }
  }
  console.log(message);
  return message;
}

function total() {
  // write your code here
  var total = cart.reduce((a, b) => a + b.itemPrice, 0);
  return total;
}

function removeFromCart(item) {
  // write your code here
  var del = cart.reduce((a, b, c) => ((b.itemName === item) ? c : a ), -1);
  if (del !== -1) {
    return cart.splice(del,1);
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber === 'undefined') {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
  }
}
