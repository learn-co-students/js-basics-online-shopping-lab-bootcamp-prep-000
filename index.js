var cart=[];
// define global variable, variables deined w = operator, initialize an empty array
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
//total accepts no arguments. It iterates over
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {

  return cart
}
/*This function should automatically set a price for this item by generating a random number between 0 and 100.
(Hint: Math.random() generates a random number in 0, 1; Math.floor() rounds a number down to the nearest integer.)
//This function should add the item and the price as an object ({item: price}) to the cart array.
This function should print out to the console <item> has been added to your cart. and return the cart.
function addToCart(item) */
