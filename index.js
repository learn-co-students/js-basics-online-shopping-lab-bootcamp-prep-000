var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  var cartSize = cart.length;
  for (var i = 0; i < cartSize; i++) {
    for (var element in cart[i]) {
      t += cart[i][element];
    }
  }

  return t
}

function getCart() {
    return cart;
}

function addToCart(item) {
    var price = Math.floor(Math.random() * 100) + 1;
    var newItem = {};
    newItem[item] = price;
    cart.push(newItem);
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {
  var cartSize = cart.length;
  if (cartSize === 0) {
    console.log('Your shopping cart is empty.');
  }
  else {
    var cartString = 'In your cart, you have ';
    for (var i = 0; i < cartSize; i++) {
      for (var item in cart[i]) {
        cartString += `${item} at $${cart[i][item]}`;
        if (i + 1 < cartSize) {
          cartString += ', ';
        }
      }
    }
    cartString += '.';
    console.log(cartString);
  }
  return cart;
}

function removeFromCart(item) {
  var removed = false;
  var cartSize = cart.length;
  for (var i = 0; i < cartSize; i++) {
    for (var element in cart[i]) {
      if (element === item) {
        cart.splice(i, 1);
        removed = true;
      }
    }
  }
  if (removed) {
    console.log(`${item} was removed from cart.`);
  }
  else {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    var cartSize = cart.length;
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cartSize);
  }
  return cart;
}
