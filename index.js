var cart = [];

function getCart() {
  return cart;
};

function setCart(newCart) {
  cart = newCart;
};

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({item: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
};

var itemName = Object.keys(cart)

function viewCart() {
  for (var item in cart) {
    var itemName = Object.keys(cart[item]);
    var cost = item.value;
    if(item.length > 0) {
    console.log(`In your cart, you have ${itemName} at $${cost}.`);
  } else {
    console.log('Your shopping cart is empty.');
  }
}
};

function viewCart() {
  for(var item in cart) {
    if(cart.hasOwnProperty(item)) {
      var itemName = Object.keys(cart[item]);
      var value = cart[item];
      console.log(`In your cart, you have ${itemName} at $${value}.`);
      } else {
      console.log('Your shopping cart is empty.');
      }
    }
  };

function removeFromCart(item) {
  for(var stuff in cart) {
    if(stuff.hasOwnProperty(item)) {
      console.log(`That item is not in your cart.`)
    } else {
      delete cart.item;
  }
}
  return cart;
};

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  };

  return t
};
