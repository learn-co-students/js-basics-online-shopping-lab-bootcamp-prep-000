var cart;
cart = [];

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
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var itemsAndPrices = [];

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
    itemsAndPrices.push(`${item} at $${price}`);
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`);
}

function removeFromCart(item) {
  var isThere = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      isThere = true;
      if (isThere) {
        cart = cart.splice(0, i) + cart.splice(i + 1);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(ccNumber) {
  if (!ccNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
    cart = [];
    return cart;
  }

}
