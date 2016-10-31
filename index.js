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
}

function addToCart(item) {
  var itemObj = {}
  itemObj[item] = Math.floor(Math.random()*100);
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var str = '';
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        str += ` ${key} at $${cart[i][key]},`;
      }
    }
    console.log(`In your cart, you have${str}.`);
  }
}

function removeFromCart(item) {
  var flag = false;
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      if (key === item) {
        delete cart[i];
        flag = true;
      }
    }
  }
  if (!flag) {
    console.log("That item is not in your cart.");
  }
  else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === null)
   console.log("We don\'t have a credit card on file for you to place your order.");
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
}
