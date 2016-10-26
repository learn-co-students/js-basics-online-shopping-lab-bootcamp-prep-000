var cart;

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

var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({item: price});
  var added = item + " has been added to your cart.";
  console.log( added );
}

function viewCart() {
  var i;
  var stuffInCart;
  for (i = 0; i < cart.length; i += 1) {
     "In your car you have" + cart[i]);
  }
  console.log(stuffInCart)
}
