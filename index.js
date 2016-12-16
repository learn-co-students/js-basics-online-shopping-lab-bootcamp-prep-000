var cart = new Array();

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var cartView = "In your cart, you have ";
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        cartView += `${item} at $${cart[i][item]}`;
        if (cart.length === 1 || i === cart.length - 1) {
          cartView += ".";
        } else {
          cartView += ", ";
        }
      }
    }
  }

  console.log(cartView);
}

function removeFromCart(item) {
  var deleted = false;

  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      delete cart[i];
      cart.length--;
      deleted = true;
    }
  }

  if (deleted === false) {
    console.log("That item is not in your cart.");
  }
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

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  } else {
    console.log(`We don't have a credit card on file for you to place your order.`);
  }

  cart = [];
}
