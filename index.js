var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var view = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++) {
      var things = Object.keys(cart[i]);
      view.push(`${things} at $${getCart()[i][things]}`);
    }
    console.log(`In your cart, you have ${view.join(", ")}.`);
  }
}

function removeFromCart(item) {
  var match = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      match.push(i);
    }
  }
  if (match.length === 0) {
    console.log("That item is not in your cart.");
  } else {
    for (var i = 0; i < match.length; i++) {
      cart.splice(match[i], 1);
    }
  }
  return cart;
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

function placeOrder(cc) {
  if (cc === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
    return cart = [];
  }
}
