var cart = []

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
cart[`${item}`] = price;
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var array = [];
    for (var item in cart) {
      array.push(`${item} at ${cart[item]}.`);
    }
    var inCart = 'In your cart, you have ';
    console.log(inCart.concat(array.join(', ')) + '.');
  }
}

function removeFromCart(item) {
if (cart.hasOwnProperty(item)) {
  delete cart.item;
  return cart;
} else {
console.log('That item is not in your cart.');
}
}
