var cart = [];

function getCart () {
  return cart;
}

function addToCart (item) {
  cart.push({item:price});
  var price = Math.floor(Math.random()* 100);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function setCart (newCart) {
  cart = newCart;
}

function viewCart () {
  var l = cart.length
  if (l>0) {
    var pricePairs = [];
    for (let i=0; i < cart.length; i++) {
      var itemObject = cart[i];
      var item = Object.keys(itemObject);
      var price = itemObject[item];
      pricePairs.push(`${item} at $${price}`);
    }
    console.log(`In your cart, you have ${pricePairs.join(', ')}.`);
  } else {
    console.log('Your shopping cart is empty.');
  }
}
function removeFromCart (item) {
  var itemObject = cart[]
  for (var item in cart) {
    if (itemObject.hasOwnProperty(item)) {

    }
  }
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
