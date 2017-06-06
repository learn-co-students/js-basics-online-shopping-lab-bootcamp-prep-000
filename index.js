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
  var obj = {};
  obj[item] = Math.floor(Math.random() * 100);
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0)
    console.log("Your shopping cart is empty.");
  else {
    var msg = 'In your cart, you have';
    for(var i = 0; i < cart.length; i++) {
      if(i === 0)
        msg+= ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`;
      else
        msg+= `, ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`;
    }
    msg+='.';
    console.log(msg);
  }
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i][item] !== undefined) {
      cart.splice(i,1);
      return;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(creditCard) {
  if(creditCard === undefined)
    console.log("We don't have a credit card on file for you to place your order.");
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
  }

  cart = [];
}
