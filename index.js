var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
  /* This function should automatically set a price
  for this item by generating a random number in 0, 1;
  use Math.floor() rounds a number down to the nearest integer.)
  This function should add the item and the price as an object ({item: price})
  to the cart array. And return the cart.
  */
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
