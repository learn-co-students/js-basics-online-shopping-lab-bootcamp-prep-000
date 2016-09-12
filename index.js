var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var itemName = item;
  item = {};
  item.name = itemName;
  item.price = ( Math.floor(Math.random() * 100) );
  cart.push(item);
  console.log(`${item.name} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var itemAtPrice = [];
  if (cart.length > 0) {
    for (var i in cart) {
      itemAtPrice.push(` ${cart[i].name} at ${cart[i].price}`)
    }
  console.log(`In your cart you have${itemAtPrice}`);
  }
  else {
    console.log("Your shopping cart is empty");
  }
}

function removeFromCart(itemName) {
  for (var i in cart) {
    if (cart[i].name === itemName) {
      delete cart[i];
      return cart;
    }
  }
  console.log("That item is not in your cart");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file to place your order.");
  }
  else {
    console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}`);
    while(cart.length > 0) {
      cart.pop();
    }
  }
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i].price;
    }
  }
  return t;
}
