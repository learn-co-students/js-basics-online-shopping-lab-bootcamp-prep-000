var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const price = Math.floor(Math.random() * 100) + 1;
 cart.push({ [item]: price });
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  }

  var cartStr = "In your cart, you have ";
  var key0 = Object.keys(cart[0]);
  var value0 = cart[0][Object.keys(cart[0])];

  if (cart.length === 1) {
    console.log(`${cartStr}${key0} at $${value0}.`);
  } else if (cart.length === 2) {
    var key1 = Object.keys(cart[1]);
    var value1 = cart[1][Object.keys(cart[1])];
    console.log(`${cartStr}${key0} at $${value0} and ${key1} at $${value1}.`)
  } else {
    var cartString = "";
    for (var i = 0; i < (cart.length - 1); i++) {
      var key = Object.keys(cart[i])[0];
      var value = cart[i][key]
      cartString = `${cartString} ${key} at $${value},`
    }
    var key = Object.keys(cart[(cart.length - 1)])[0];
    var value = cart[(cart.length - 1)][key];
    cartString = `${cartString} and ${key} at $${value}.`;
    console.log(`In your cart, you have${cartString}`);
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart.length = 0;
}
