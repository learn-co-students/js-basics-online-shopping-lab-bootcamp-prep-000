var cart = [];

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

  return t;
}


function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random());
  cart.push(`${item}:${price}`);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
  var array = [];
  for (var i = 0; i < cart.length ; i++) {
    for (var item in cart[i]) {
      array.push(`${item} at $${cart[i][item]}`);
    }
  }
  if (cart.length < 1) {
      console.log("Your shopping cart is empty.");
  } else {
      console.log(`In your cart, you have ${array.join(", ")}. `);
    }
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
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart = [];
    //for (var i = cart.length; i > 0; i--) {
    //cart.pop();
    }
  }
