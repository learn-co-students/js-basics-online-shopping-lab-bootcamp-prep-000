var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*(100 + 1) + 1);
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartContents = "In your cart, you have";
  if (!cart.length) {
    cartContents = "Your shopping cart is empty.";
  } else if (cart.length === 1) {
      var key = Object.keys(cart[0]);
      cartContents += ` ${key} at $${cart[0][key]}.`;
  } else if (cart.length === 2) {
      var key0 = Object.keys(cart[0]);
      var key1 = Object.keys(cart[1]);
      cartContents += ` ${key0} at $${cart[0][key0]} and ${key1} at $${cart[1][key1]}.`;
  } else {
      for (var i = 0; i < cart.length - 1; i++) {
        var key = Object.keys(cart[i]);
        cartContents += ` ${key} at $${cart[i][key]},`;
      }
      var key = Object.keys(cart[cart.length - 1]);
      cartContents += ` and ${key} at $${cart[cart.length - 1][key]}.`;
  }
  console.log(cartContents);
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i]);
    sum += cart[i][key];
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
