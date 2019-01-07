var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
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
  if (!cardNumber) {
    console.log('We don\'t have a credit card on file for you to place your order.');
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
}
