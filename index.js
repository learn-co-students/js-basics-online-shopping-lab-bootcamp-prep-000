var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var price = Math.floor(Math.random() * 100) + 1;

  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  
  var cartList = [];

  if (cart.length === 0) {
    return console.log('Your shopping cart is empty.');
  }

  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var key = Object.keys(obj)[0];
    var value = obj[key];

    cartList.push(`${key} at \$${value}`);
  }
  switch(cartList.length) {

    case 1:
      break;

    case 2:
      cartList = cartList.join(' and ');
      break;

    default:
      cartList[cart.length - 1] = 'and '.concat(cartList[cart.length - 1]);
      cartList = cartList.join(', ');
  }
  console.log(`In your cart, you have ${cartList}.`);
}

function total() {
  var sum = 0;

  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    var key = Object.keys(obj)[0];
    var value = obj[key];
    sum += value;
  }
  return sum;
}

function removeFromCart(item) {

  var inCart = false;

  for (var i = 0; i < cart.length; i++) {
    var el = cart[i];

    if (el.hasOwnProperty(item)) {
      inCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
  if (!inCart) {
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cardNumber) {

  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');

  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;  
  }
}
