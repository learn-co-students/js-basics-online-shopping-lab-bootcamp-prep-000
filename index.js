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

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart = Object.keys([item]);
  cart.item = price;
  console.log(item + " has been added to your cart.");
  return getCart();
}

function viewCart() {
  if (cart = []) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0; i < cart.length; i++) {
      return `In your cart, you have ${cart} ${cart[i]}.`;
      }
  }
}

function removeFromCart(item) {
  if (cart.hasOwnProperty(item)) {
    delete cart.item;
    return array;
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber = undefined) {
    return "We don't have a credit card on file for you to place your order.";
  } else {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }
  var cart = [];
}
