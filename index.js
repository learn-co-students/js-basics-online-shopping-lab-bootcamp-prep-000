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
 cart.push({'itemName': item, 'itemPrice': Math.floor(Math.random()*100)});
 return `${cart[cart.length - 1]['itemName']} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart == false) return 'Your shopping cart is empty.';
  var str = 'In your cart, you have'
  for (let i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      str += ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
    } else {
      if (i !== cart.length - 1) {
        str += ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']},`;
      } else {
        str += ` and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
      }
    }
  }
  return str;
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i]['itemPrice'];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var condition = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]['itemName'] === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) return "Sorry, we don't have a credit card on file for you.";
  var totalAmt = total();
  cart = [];
  return `Your total cost is $${totalAmt}, which will be charged to the card ${cardNumber}.`;
}
