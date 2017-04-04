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

function getCart () {
  return cart;
}

function addToCart (item) {
  var itemPrice = Math.floor(Math.random() * (100 + 1));
  cart.push({[item]: itemPrice});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart () {
  if (cart.length !== 0) {
    var itemsAndPrices = [];
    for (var i = 0; i < cart.length; i++ ){
    var item = Object.keys(cart[i])[0];
    var price = (cart[i])[item];
    itemsAndPrices.push(` ${item} at $${price}`);
    }
    console.log(`In your cart, you have${itemsAndPrices}.`)
  }
  else  {
    console.log("Your shopping cart is empty.");
  }
}


function removeFromCart (itemRemove) {
  var inCart = false;
  for (var i = 0; i < cart.length; i++) {
  var items = Object.keys(cart[i])[0];
   if (itemRemove === items) {
     inCart = true;
     cart.splice(cart[i],1);
}
}
  if (!inCart) {
    console.log("That item is not in your cart.");
}
return cart;
}

function placeOrder (cardNumber) {
  if (isNaN(cardNumber)) {
  console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else {

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
  }
}
