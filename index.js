var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var response = 'In your cart, you have';
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      var key = Object.keys(item)[0];
      console.log(key);
      response += ` ${key} at $${item[key]},`;
    }
    console.log(response.slice(0, response.length - 1) + '.');
  }
}

function removeFromCart(title) {
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    if (item.hasOwnProperty(title)) {
      cart.splice(i, 1);
      return;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
  } else {
    console.log('We don\'t have a credit card on file for you to place your order.');
  }
}