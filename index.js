var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var random = 1 + Math.floor(Math.random() * 99);
 cart.push({[item]: random});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  var announcement = 'In your cart, you have '
  if (cart.length === 1) {
    announcement += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`;
  } else if (cart.length === 2) {
    announcement += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`;
  } else {
    for (var i = 0; i < cart.length; i++) {
      announcement += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`;
      if (i === cart.length - 1) {
        announcement += '.';
      } else {
        announcement += ', ';
        if (i === cart.length - 2) {
          announcement += 'and '
        }
      }
    }
  }
  console.log(announcement);
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === Object.keys(cart[i]).toString()) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
