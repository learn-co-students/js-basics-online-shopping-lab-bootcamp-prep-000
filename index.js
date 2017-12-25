var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  var itemObject = {[item]: price};
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartStrings = []; // holds a string for each Object in the cart describing its key and value

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  // if cart only has one item, these variables will be set only once, here
  else if (cart.length === 1) {
    // get the 1 Object out of the cart array and get it's key name with Object.keys
    var currentItemKeyName = Object.keys(cart[0]);

    // get the 1 Object ouf of the cart array and get it's value using the key name from above
    var currentItemPrice = cart[0][currentItemKeyName];
  }
  // if the cart has more than one item, use the above 2 variables to get each Object
  // out of the cart, then get it's key and value and put them in the
  // cartStrings array with appropriate syntax
  else {
    for(var i = 0; i < cart.length; i++) {
      var currentItemKeyName = Object.keys(cart[i]);
      var currentItemPrice = cart[i][currentItemKeyName];

      cartStrings[i] = `${currentItemKeyName} at $${currentItemPrice}`

      // for the last Object in the cart array, add "and" to its string version
      if (i >= cart.length - 1) {
        cartStrings[i] = "and " + cartStrings[i]
      }
    }
  }

  var sentence;

  // Build the sentence with proper punctuation and grammar based on number
  // of items in cart
  if (cart.length === 1) {
    sentence = `In your cart, you have ${currentItemKeyName} at $${currentItemPrice}.`;
  }
  else if (cart.length == 2) {
    sentence = "In your cart, you have " + cartStrings.join(' ') + ".";
  }
  else {
    sentence = "In your cart, you have " + cartStrings.join(', ') + ".";
  }

  // Print final sentence
  console.log(sentence);
}

function total() {
  var total = 0;

  if (cart.length === 0) {
    return 0;
  }
  else {
    for(var i = 0; i < cart.length; i++) {
      var currentItemKeyName = Object.keys(cart[i]);
      var currentItemPrice = cart[i][currentItemKeyName];

      total = total + parseInt(currentItemPrice);
    }
    return total;
  }
}

function removeFromCart(item) {
  var found = false;
  for(var i = 0; i < cart.length; i++) {

    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      found = true;
    }
  }

  if (found) {
    return cart;
  }
  else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  console.log(cardNumber);
  if (typeof cardNumber === "undefined") {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

    for(var i = 0; i <= cart.length; i++) {
      cart.pop();
    }
  }
}
