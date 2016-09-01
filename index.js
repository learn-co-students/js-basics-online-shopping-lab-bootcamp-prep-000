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

function addToCart(i) {
  var randPrice = Math.floor(Math.random() * 100);
  var item = { [i]: randPrice };

  getCart().push(item);

  console.log(`${i} has been added to your cart.`);
  return getCart();
}

function viewCart() {
  var l = getCart().length;
  var arr = [];

  if (!l) return console.log(`Your shopping cart is empty.`);

  for(var i=0; i < l; i++) {
    var obj = getCart()[i];
    var key = Object.keys(obj)[0];

    arr.push(`${key} at $${obj[key]}`);
  }

  return console.log(`In your cart, you have ${arr.join(', ')}.`);
}

function removeFromCart(itemName) {
  var l = getCart().length;
  var itemToRemove;
  var isRemoved = false;

  for (var i=0; i < l; i++) {
    var obj = getCart()[i];

    if (obj.hasOwnProperty(itemName)) {
      getCart().splice(i, 1);
      isRemoved = true;
    }
  }

  if(!isRemoved) {
    return console.log(`That item is not in your cart.`);
  }

  return getCart();
}

function placeOrder(cardNumber) {
  var t = total();
  if (!cardNumber) return console.log(`We don't have a credit card on file for you to place your order.`);

  while(getCart().length > 0) {
    getCart().pop();
  }

  return console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`);
}
