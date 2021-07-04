var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100) + 1);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var str = 'In your cart, you have ';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  for (var i = 0; i < cart.length; i++) {
    for (var value in cart[i]) {
      if (cart.length === 1) {
        str += `${value} at $${cart[i][value]}.`;
      } else if(cart.length === 2 && i !== cart.length - 1) {
        str += `${value} at $${cart[i][value]} `;
      } else if(cart.length > 2 && i !== cart.length - 1) {
        str += `${value} at $${cart[i][value]}, `;
      } else if(i === cart.length - 1) {
        str += `and ${value} at $${cart[i][value]}.`;
      }
    }
  }
  console.log(str);
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var food in cart[i]) {
      total += cart[i][food];
    }
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
