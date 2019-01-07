var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`)
  return getCart();
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var itemString = [];
    for (var item in cart) {
      var itemName = Object.keys(cart[item]);
      var itemPrice = cart[item][itemName];
      itemString.push(` ${itemName} at $${itemPrice}`);
  }
  console.log(`In your cart, you have${itemString}.`);
  }
}

function removeFromCart(item) {
  var removed = 0;
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      removed++;
    }
  }
  if (removed === 0) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.length = 0;
}
