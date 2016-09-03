var cart = [];

function setCart(newCart) {
  cart = newCart;
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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (101 - 0) + 0);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return getCart();
}

function viewCart() {
  var message = "In your cart, you have ";
  if (cart.length) {
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        message += item + " at $" + cart[i][item];
        (i < cart.length - 1) ? console.log(message += ", ") : console.log(message += ".");
      }
    }
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item) {
  var l = cart.length;
  var notAvailable = console.log("That item is not in your cart.")
  if (l) {
    for (var i = 0; i < l; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        return getCart();
      } else {
        notAvailable;
      }
    }
  } else {
    notAvailable;
  }
}

function placeOrder(ccn) {
  if (ccn === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + ccn + ".");
    cart = [];
    return getCart();
  }
}
