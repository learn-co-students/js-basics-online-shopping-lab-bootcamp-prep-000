var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
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

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(item) {
  cart.push( { [item]: getRandomInteger() } );
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  if (cart.length > 0) {
    var str = `In your cart, you have `
    for (let i = 0, l = cart.length; i < l; i++ ) {
      var obj = cart[i];
      var tempArr = [];
      for (let itemName in obj) {
        tempArr.push(`${itemName} at ${obj[itemName]}`);
      }
      joined = tempArr.join(', ');
      str += joined;
    }
  }
  console.log(str);
}