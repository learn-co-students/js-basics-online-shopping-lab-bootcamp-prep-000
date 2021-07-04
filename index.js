var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObj = {};
  newObj['itemName'] = item;
  newObj['itemPrice'] = Math.floor(Math.random() * Math.floor(100));
  cart.push(newObj);
  return `${item} has been added to your cart.`
}

function viewCart() { 
  var statement = 'In your cart, you have ';
  if (cart.length === 1) {
    return statement + `${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
  }
  else if (cart.length > 0) {
    for (var i = 0; i < cart.length - 1; i++) {
      statement = statement + `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `
  }
    return statement + `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
  } 
  else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i]['itemPrice'];
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i]['itemName']) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else {
    var cost = total()
    cart.splice(0);
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
