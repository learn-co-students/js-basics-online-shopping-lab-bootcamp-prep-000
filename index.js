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
  return cart
}

function addToCart(item) {
  var price = Math.random() >= 100
  cart.push({item: price});
    console.log(`${item} has been added to your cart.`);
  return cart
  }

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var itemList = [];
    for (var i = 0; i < cart.length; i++) {
      var itemName = Object.keys(cart[i])[0];
      var itemPrice = cart[i][itemName];
      itemList.push(` ${itemName} at $${itemPrice}`);
    }
    console.log(`In your cart, you have ${itemList}.`);
  }
}

function removeFromCart(removeItem) {
  for (var i = 0, l = cart.length; i < l; i++) {
    var cartItems = Object.keys(cart[i])[0];
  if (removeItem = cartItems.hasOwnProperty('item')) {
    cart.pop(cartItems)
    return cart;
  } else {
    console.log("That item is not in your cart.");
    }
  }
}
