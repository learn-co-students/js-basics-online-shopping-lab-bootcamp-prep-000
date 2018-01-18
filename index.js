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
  var cartItem = new Object({[item]:price});
  cart.push(cartItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length == 1) {
    console.log("In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + ".");
  }
  else if (cart.length == 2) {
    console.log("In your cart, you have " + Object.keys(cart[0])[0] + " at $" + cart[0][Object.keys(cart[0])[0]] + " and " + Object.keys(cart[1])[0] + " at $" + cart[1][Object.keys(cart[1])[0]] + ".");
  }
  else {
    var string = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      if (i < cart.length - 1) {
        string = string + Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]] + ", ";
      }
      else {
        string = string + "and " + Object.keys(cart[i])[0] + " at $" + cart[i][Object.keys(cart[i])[0]] + ".";
      }
    }
    console.log(string);
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var priceArray = Object.values(cart[i]);
    var price = parseInt(priceArray[0]);
    total = total + price;
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      var indexOfItem = i;
    }
  }
  if (typeof indexOfItem !== 'undefined') {
    cart.splice(indexOfItem, 1);
    return cart;
  }
  else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if(typeof cardNumber !== 'undefined') {
    var cost = total();
    var s = `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
    cart.length = 0;
    console.log(s);
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
