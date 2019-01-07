var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {[item]: Math.floor(Math.random()*100)};
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var view = []
  for (var i = 0; i < cart.length; i++) {
    view.push(`${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`);
  }
  view[view.length - 1] = (`and ${view.slice(-1)[0]}`);
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`);
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${view.join(" ")}.`);
  } else {
    console.log(`In your cart, you have ${view.join(', ')}.`);
  }
}

function total() {
  var owed = 0;
  for (var i = 0; i < cart.length; i++) {
    owed += Object.values(cart[i])[0];
  }
return owed
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var gone = cart[i];
  if (gone.hasOwnProperty(item)) {
    cart.splice(i, 1);
  return cart; }
  }
console.log(`That item is not in your cart.`)
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
console.log(`Sorry, we don\'t have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [] ;
  }
}
