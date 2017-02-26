var cart = [];

function getCart() {
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log ('We don\'t have a credit card on file for you to place your order.');
  }
  else if (cardNumber) {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }

  cart.length = 0;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100 + 1);

  cart.push({[item] : price});

  console.log (`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  const itemsPrices = [];

  if (!cart.length) {
    console.log ('Your shopping cart is empty.');
    return cart;
  }

  for (var i = 0; i < cart.length; i++) {
    let itemsPricesTemp = cart[i];
    let item = Object.keys(itemsPricesTemp);
    let price = itemsPricesTemp[item];

    itemsPrices.push(`${item} at $${price}`)
  }

  console.log(`In your cart, you have ${itemsPrices.join(', ')}.`);
}

function removeFromCart(item) {
  var present = false;

  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      present = true;
    }
    return cart;
  }

  if (!present) {
    console.log ('That item is not in your cart.');
  }
  return cart;
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
