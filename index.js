var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartKeys = Object.keys(cart);
  if (cartKeys.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
  var result = 'In your cart, you have';
  for (let i = 0; i < cart.length; i++) {
    for (let item in cart[i]) {
      result += ` ${item} at $${cart[i][item]}`;
      (i < cart.length - 1) ? result += ',' : result += '.';    
    }
  } console.log(result);
  }  
}

function removeFromCart(item) {
  var found = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      found = true;
    }
  }
  if (found === false) {
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cc) {
  if (!cc) {
    console.log('We don\'t have a credit card on file for you to place your order.');
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    cart = [];
  }
}