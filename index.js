var cart = {};

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

function getCart() {
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100);

  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  const cartItems = [];

  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.");
  } else {

    for (let i = 0; i < cart.length; i++) {
      let cartView = cart[i];
      let item = Object.keys(cartView)[0];
      let price = cartView[item];
      cartItems.push(`${item} at \$${price}`);
    }

  }
  return console.log(`In your cart, you have ${cartItems.join(', ')}.`);
}

function removeFromCart(item) {
  let inCart = false;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
        inCart = true;
        cart = cart.slice(0, i);
    }
  }

  if (!inCart) {
    console.log("That item is not in your cart.");
  }

  return cart;
}

function placeOrder(cardNumber) {

  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart.length = 0;
}
