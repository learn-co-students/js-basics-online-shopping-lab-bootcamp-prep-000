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
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 10);
var obj = {};
obj[item] = price;
cart.push(obj);
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var inYourCart = 'In your cart, you have';
    var concatter = [];
    for (var i = 0; i < cart.length; i++) {
      var cartItem = cart[i]; // {iphone: 250}
      var itemKey = Object.keys(cartItem)[0]; // grab the key of just that one specific cart item.
      var itemValue = cartItem[itemKey];
      concatter.push(` ${itemKey} at $${itemValue}`);
    }
      console.log(`${inYourCart}${concatter}.`);
  }
}



function removeFromCart(item) {
  var itemInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
    }
  }

  if (!itemInCart) {
  	console.log('That item is not in your cart.');
  }
      return cart;
}

function add(a, b) {
    return a + b;
}

function placeOrder(cardNumber) {
if (arguments.length === 0) {
  console.log('We don\'t have a credit card on file for you to place your order.');
} else {
  var itemPrices = [];
  for (var i = 0; i < cart.length; i++) {
  var cartItem = cart[i]; // {iphone: 250}
  var itemKey = Object.keys(cartItem)[0]; // grab the key of just that one specific cart item.
  var itemValue = cartItem[itemKey];
  itemPrices.push(itemValue);
}
console.log(`Your total cost is $${itemPrices.reduce(add, 0)}, which will be charged to the card ${cardNumber}. `)
}
cart.length = 0;
console.log(cart);
console.log(itemPrices);
}

addToCart('calzone');
addToCart('bokbok');
addToCart('pea');
placeOrder(123);
