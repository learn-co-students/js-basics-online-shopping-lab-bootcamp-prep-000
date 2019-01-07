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

function getCart() {
  return cart;
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

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(item) {
  cart.push( { [item]: getRandomInteger() } );
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  if (cart.length > 0) {
    var str = `In your cart, you have `
    var tempArr = [];
    for (let i = 0; i < cart.length; i++) {
      let obj = cart[i];
      let item = Object.keys(obj)[0];
      let price = Object.keys(obj).map(function(key){
        return obj[key];
      });
      tempArr.push(`${item} at $${price}`);
    }
    str += tempArr.join(', ') + '.';
    console.log(str);
  } else {
    console.log('Your shopping cart is empty.');
  }
}

function removeFromCart(name) {
  for (let i = 0; i < cart.length; i++) {
    let obj = cart[i];
    if (obj.hasOwnProperty(name) === false) { continue }
    else if (obj.hasOwnProperty(name) === true) {
      cart.splice(cart.indexOf(obj), 1);
      var success = true;
    }
  }
  if (success !== true) { console.log('That item is not in your cart.'); }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else { 
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}