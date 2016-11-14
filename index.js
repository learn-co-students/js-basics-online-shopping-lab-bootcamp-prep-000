var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item]: (Math.floor(Math.random() * 100))});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {

  var str;

  if(cart.length <= 0) { console.log("Your shopping cart is empty."); return;}

  str = "In your cart, you have ";

  for(var i = 0; i < cart.length; i++) {
    for(var k in cart[i]) {
      //str += k + " at " + cart[i][k];
      str += `${k} at $${cart[i][k]}`;
      if(i === cart.length-1) str += '.'; else str += ', ';
  }
}
  console.log(str);
}

function removeFromCart(item) {

  var fl = false;

  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      //delete
      if(i !== cart.length-1) cart = [...cart.slice(0, i), ...cart.slice(i+1)];
      else cart.pop();
      fl = true;
    }
  }
  if(fl === false) console.log("That item is not in your cart.");
  return cart;
}

function total() {
  var t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) { console.log("We don't have a credit card on file for you to place your order."); return;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
