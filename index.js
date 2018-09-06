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
  var price = Math.floor(Math.random() * 100) + 1;
  var itemy = {};
  itemy['itemName'] = item;
  itemy['itemPrice'] = price;
  cart.push(itemy);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var blah = [];
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }

  for (var i = 0; i < cart.length; i++) {
    blah.push(`${cart[i]['itemName']} at $${cart[i]['itemPrice']}`);
  }

  if (cart.length == 1 || cart.length == 2) {
    return `In your cart, you have ${blah.join(', and ')}.`;
  } else {

    var front = blah.slice(0, blah.length - 1);
    var end = blah.slice(blah.length - 1, blah.length);
    return `In your cart, you have ${front.join(', ')}, and ${end}.`;
  }

}

function total() {
  // write your code here
  var totals = 0;
  for (var i = 0; i < cart.length; i++) {

    totals += cart[i]['itemPrice'];

  }

  return totals;
}

function removeFromCart(item) {
  // write your code here
  var found = cart.some(function (el) {
    console.log(el.itemName === name);
  });

  for (var i = 0; i < cart.length; i++) {
    if (cart[i]['itemName'] == item) {
      cart.splice(i, 1);
    }
  }

  if (!found) {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var num = total();
    cart = [];
    return `Your total cost is $${num}, which will be charged to the card ${cardNumber}.`;

  }
}
