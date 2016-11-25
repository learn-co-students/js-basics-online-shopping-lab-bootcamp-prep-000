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
  return cart
}

function addToCart (item) {
  var itemPrice = Math.floor(Math.random() * 100);
  var itemObject = {[item]: itemPrice};
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart () {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {

    var cartDescrip = "In your cart, you have ";

    for (let i = 0; i < cart.length; i++) {
      var obj = cart[i];
      for (var prop in obj) {
        cartDescrip += `${prop} at $${obj[prop]}${i === cart.length - 1 ? "." : ", "}`;
      }
    }
    console.log(cartDescrip);
  }
}
