var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randomItemPrice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var cart = [];

function addToCart(itemName) {
  cart.push({[itemName]: (randomItemPrice(1, 100))});
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

var cart = [];

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`);
  } else if (cart.length > 1) {
      var cartArray = [];
      for (var i = 0; i <= cart.length-1; i ++) {
        var oKeys = Object.keys(cart[i])[0];
        cartArray.push(` ${oKeys} at $${cart[i][oKeys]}`);
          if (cartArray.length === 2) {
          var twoItemString = `In your cart, you have${cartArray.slice(0, 1)} and${cartArray.slice(1, 2)}.`;
          console.log(twoItemString);
          } else if (cartArray.length > 2) {
          var threeItemString = `In your cart, you have${cartArray.slice(0,-1)}, and${cartArray.slice(-1)}.`;
          console.log(threeItemString);
          }
      }
  }
}

var cart = [];

function total() {
  var totalCart = 0;
  for (var i = 0; i < cart.length; i ++) {
    totalCart = totalCart + parseInt(cart[i][Object.keys(cart[i])[0]]);
  }
  return totalCart;
}

var cart = [];

function removeFromCart(item) {
  for (var i = 0; i <= cart.length-1; i ++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
    console.log(`That item is not in your cart.`);
    return cart;
}

var cart = [];

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  } else {
      console.log(`Sorry, we don\'t have a credit card on file for you.`);
  }
}
