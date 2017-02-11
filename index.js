var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100));
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var length = cart.length;
  if (length > 0) {
    var cartItemsAndPrices = [];
    for (let i = 0; i < length; i++) {
      let itemAndPrice = cart[i];
      let item = Object.keys(itemAndPrice);
      let price = itemAndPrice[item];
      cartItemsAndPrices.push(`${item} at \$${price}`);
      console.log(`In your cart, you have ${cartItemsAndPrices.join(', ')}.`);
    }
  }  else {
    console.log("Your shopping cart is empty.");
    }
}

function removeFromCart(itemName) {
  var itemToRemove = false;

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemName)) {
      itemToRemove = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  } if (!itemToRemove) {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(creditCard) {
  if (!creditCard) {
    return console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${creditCard}.`);
  }
  cart = [];
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}
