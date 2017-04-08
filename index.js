var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({ [item] : price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var cartList = [];

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    for (var index in cart) {
      var cartItem = cart[index];
      var itemName = Object.keys(cartItem)[0];
      var itemPrice = cartItem[itemName];
      cartList.push(`${itemName} at $${itemPrice}`);
//    cartList.push(${Object.keys(cartItem)[0]} at $${cartItem[Object.keys(cartItem)[0]]}`);
    }
    console.log(`In your cart, you have ${cartList.join(', ')}.`);
  }
}

function removeFromCart(item) {

var counter = 0;
// var cartItem = Object.keys(cart);

  for (var index in cart) {

    var cartItem = cart[index]; // {pizza: 12}
    var itemName = Object.keys(cartItem)[0];

    if (itemName == item) {
      counter++;
      cart.splice(index, 1);
    }
  }

  if (counter === 0) {
    console.log('That item is not in your cart.');
  }

  return cart;
}

function placeOrder(cardNumber) {

  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.");
  }

  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];

  }
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  var runningTotal = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    var itemName = Object.keys(cart[i])[0]
    runningTotal = runningTotal + cart[i][itemName];
  }
  return runningTotal;
}
