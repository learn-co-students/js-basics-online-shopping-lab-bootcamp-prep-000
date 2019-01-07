var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var product = new Object({ [item]: Math.floor(Math.random() * 100) + 1 });
  cart.push(product);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var list = 'In your cart, you have';
  var i = 0;
  var l = cart.length;
  if (!l) {
    return console.log('Your shopping cart is empty.');
  } else if (l === 1) {
      list += ` ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`;
      return console.log(list);

    } else if (l === 2) {
      list += ` ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`;
      return console.log(list);
    } else {
      while (i < l - 1) {
        list += ` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]},`;
        i++;
      }
      list += ` and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`;
      return console.log(list);
    }
}

function total() {
  var t = 0;
  var i;
  var l = cart.length;
  for (i = 0; i < l; i++){
    t += cart[i][Object.keys(cart[i])[0]];
  }
  return t;
}

function removeFromCart(item) {
  var i;
  var l = cart.length;
  for (i = 0; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
    return;
  } else {
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return;
  }
}
