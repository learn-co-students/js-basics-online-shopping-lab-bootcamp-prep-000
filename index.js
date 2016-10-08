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
var price = Math.floor(Math.random() * 10);
var obj = {};
obj[item] = price;
cart.push(obj);
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var inYourCart = 'In your cart, you have';
    var concatter = [];
    for (var i = 0; i < cart.length; i++) {
      var cartItem = cart[i]; // {iphone: 250}
      var itemKey = Object.keys(cartItem)[0];
      var itemValue = cartItem[itemKey];
      concatter.push(` ${itemKey} at $${itemValue}`);
    }
      console.log(`${inYourCart}${concatter}.`);
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
    if (key == item) {
      cart.splice(i, 1);
      console.log(cart);
    } else {
      console.log('That item is not in your cart.');
    }
  }
}
}
