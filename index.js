var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {

  cart.push({
    [item]: Math.floor(Math.random() * 100)
  });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    var output = 'In your cart, you have';

    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        output+= ` ${item} at $${cart[i][item]},`;
      }
    }
    console.log(output.slice(0, -1) + '.');
  } else {
    console.log('Your shopping cart is empty.');
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cc) {
  if (cc === undefined) {
    console.log(`We don't have a credit card on file for you to place your order.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    cart = [];
  }
}

function total() {
  var t = 0;

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t+= cart[i][item];
    }
  }
  return t;
}
