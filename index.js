var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName, fullItem;
  var itemPrice = Math.floor(Math.random(1, 101) * 100)
  fullItem = {
    itemName: item,
    itemPrice: itemPrice
  };
  cart.push(fullItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let string = 'In your cart, you have ';
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } 
  else if (cart.length === 1) {
    string += `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`; 
    return string; //tell it to return the string;
  } 
  else {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
      string += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
      } 
      else {
      string += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `;
    }
  }
  return string;
 }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
      total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart (itemName) {
  var x;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === itemName) {
      x = cart.splice(cart[i], 1)
      return x;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder (cardNumber) {
  if (cardNumber > 0) {
    cart = [];
    var totalPrice = total();
    return 'Your total cost is $' + totalPrice + `, which will be charged to the card ${cardNumber}`;
  }
  else {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
}
