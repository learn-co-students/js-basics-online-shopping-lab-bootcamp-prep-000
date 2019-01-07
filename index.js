var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};

  obj[item] = Math.floor(Math.random() * 100) + 1;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var len;

  len = cart.length;
  if (!len) {
    console.log('Your shopping cart is empty.');
  } else {
    var item;
    var msg = 'In your cart, you have ';

    for (let x = 0; x < len; x++) {
      item = Object.keys(cart[x])[0];
      msg += `${item} at $${cart[x][item]}`;
      if (x < len - 1) {
        if (len == 2) {
          msg += ' and ';
        } else if (x === (len - 2)) {
          msg += ', and ';
        } else {
          msg += ', ';
        }
      } else {
        msg += '.';
      }
    }
    console.log(msg);
  }
}

function total() {
  var item;
  var total = 0;

  for (let x = 0; x < cart.length; x++) {
    item = Object.keys(cart[x])[0];
    total += cart[x][item];
  }
  return total;
}

function removeFromCart(item) {
  var inCart;

  for (let x = 0; x < cart.length; x++) {
    if (cart[x].hasOwnProperty(item)) {
      cart.splice(x, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
