var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    var itemsAndPrices = [];
    for (var i = 0; i < cart.length; i++) {
      var itemAndPrice = cart[i];
      var item = Object.keys(itemAndPrice)[0];
      var price = itemAndPrice[item];

      itemsAndPrices.push(`${item} at \$${price}`);
    };
    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
  }
  else {
    return console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(itemToRemove) {
  for (var item in cart) {
    var itemAndPrice = cart[item];
    if (itemAndPrice.hasOwnProperty(itemToRemove)) {
      cart.splice([item], 1);
      return cart;
    }
  }

  console.log("That item is not in your cart.");
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

function placeOrder(cardNumber) { // Define a function placeOrder which accepts one argument, a credit card number.
  if (!cardNumber) {
      console.log("We don't have a credit card on file for you to place your order.");// the function should print "We don't have a credit card on file for you to place your order.".
    }
  else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
  }

  return cart = []; // The function should empty the cart array.
}
