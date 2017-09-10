var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var x = Math.random();
  var itemPrice = Math.floor(x * 100);
  var object = { [itemName]: itemPrice };
  cart.push(object);
  console.log(`${itemName}` +" has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else if (cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
  } else {
    var cart_phrase = [`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}`];
    for (var i = 1; i < cart.length; i++) {
      cart_phrase.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`);
    }
    var new_cart = [];
    new_cart.push(cart_phrase.pop());
    cart_phrase.push(`and ${new_cart}.`);
    console.log(cart_phrase.join(', '));
  }
}

function total() {
  var s = [];
  for (var i = 0; i < cart.length; i++ ) {
    s.push(parseInt(`${cart[i][Object.keys(cart[i])]}`));

  }
  var total = 0;
  for (i = 0; i < cart.length; i++){
    total += s[i];
  }
  return (total);
}


function removeFromCart(item) {
  var s = [];
  var index;
  for (var i = 0; i < cart.length; i++ ) {
    s.push(`${Object.keys(cart[i])}`);
    index = s.indexOf(item);
  }
  if  (index >= 0) {
    cart.splice(index, 1);
    return cart;
  } else {
    console.log(`That item is not in your cart.`);
    return cart;
  }
}


function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length);
    return cart;
  } else {
    console.log(`Sorry, we don\'t have a credit card on file for you.`);
  }
}
