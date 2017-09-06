var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomPrice(min, max) {
    return parseInt(Math.random() * (max-min) + min);
  }
  cart.push({ [item]: getRandomPrice(1, 100) });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartKeys = [];
  var cartValues = [];
  var threeOrMoreItems = [];

  // loop through cart
  for (var i=0; i<cart.length; i++) {
    // loop through objects
    for (let key in getCart()[i]) {
      cartKeys.push(key);
      cartValues.push(getCart()[i][key]);
    }
  }

  if (getCart().length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (getCart().length === 1) {
    console.log("In your cart, you have " + cartKeys[0] + " at $" + cartValues[0] + ".");
  } else if (getCart().length === 2) {
    console.log("In your cart, you have " + cartKeys[0] + " at $" + cartValues[0] + " and " + cartKeys[1] + " at $" + cartValues[1] + ".");
  } else
    for (var j=0; j<cart.length-1; j++) {
      threeOrMoreItems.push(cartKeys[j] + " at $" + cartValues[j]);
    };
    console.log("In your cart, you have " + threeOrMoreItems.join(', ') + ", and " + cartKeys[cart.length-1] + " at $" + cartValues[cart.length-1] + ".");

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
