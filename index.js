var cart = [];

function getCart() {
  return cart;
};

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
};

function viewCart() {
  var l = cart.length;

  if(!l) {
    console.log("Your shopping cart is empty.");
  };

  var itemsAndPrices = [];

  for (var i = 0; i < l; i++) {
    var itemAndPrice = cart[i];
    var item = Object.keys(itemAndPrice)[0];
    var price = itemAndPrice[item];
    itemsAndPrices.push(`${item} at \$${price}`);
  };

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
};

function removeFromCart(name) {
  var inCart = false;

  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(name)) {
      inCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if (!inCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)

  cart = []
}

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
