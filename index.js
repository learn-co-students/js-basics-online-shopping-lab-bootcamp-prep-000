var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price
  price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartObject = {};
  var cartArray = [];
  if (cart.length > 0) {
    for (i = 0, l = cart.length; i < l; i++) {
      Object.assign(cartObject, cart[i]);
    }
    var cartKeys;
    cartKeys = Object.keys(cartObject);
    for (var cartKeys in cartObject) {
      cartArray.push(`${cartKeys} at $${cartObject[cartKeys]}`);
    }
    console.log(`In your cart, you have ${cartArray.join(', ')}`);
    } else {
   console.log("Your shopping cart is empty.")
   }
}


function removeFromCart() {

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
