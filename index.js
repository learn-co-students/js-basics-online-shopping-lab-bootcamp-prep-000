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
};

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var displayItem = {item : price};
  cart.push(displayItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
};

function viewCart() {
  var itemAtPriceArray = [];
  var itemNames = Object.keys(meals);
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    for (var item in cart) {
      itemAtPriceArray.push(`${itemNames[i]} at ${cart[itemNames[i]]}`);
      return `In your cart, you have ${itemAtPriceArray}.`
    }
  }
};
