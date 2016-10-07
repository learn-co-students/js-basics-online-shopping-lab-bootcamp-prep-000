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

// Start GS code
function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);


  cart.push( {item: price} );
  console.log(`${item} has been added to your cart.`);

  return getCart()
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
    return getCart()
  }

  var msg = []
  for (var i = 0; i < cart.length; i++) {
    var price = Object.keys(cart[i][1]);
    var item = Object.keys(cart[i][0]);
    msg.push(`${item} at \$${price}`);

    console.log(`In your cart, you have ${msg.join(', ')}.`)
  }
}

function removeFromCart(item) {

}

function placeOrder(ccnum) {

}
