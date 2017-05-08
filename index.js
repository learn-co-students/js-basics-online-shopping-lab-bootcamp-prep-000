var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = //random price
  cart.push(item}: price);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length > 0) {
    //iterate over the object list
    return `In your cart you have ${item[i]:${price[i]}`; //rewrite code
  } else {
    return "Your shopping cart is empty."
  }
}

function removeFromCart(item) {

}
