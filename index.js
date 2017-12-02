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
  var newItem = {};
  var itemPrice = Math.floor(Math.random() * 100) + 1;

  newItem = { [item]: itemPrice };

  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  // write your code here
  var statement = "In your cart, you have ";
  var numItemsInCart = cart.length;

  // if cart doesn't have any items
  if ( cart.length === 0 ) {
    console.log( "Your shopping cart is empty." );
  } else if ( cart.length === 1 ) {
    var itemInCart = Object.keys(cart[0]);

    console.log( `${statement}${itemInCart} at $${cart[0][itemInCart]}.`);
  } else if ( cart.length === 2 ) {
    var firstItem = Object.keys(cart[0]);
    var firstItemPrice = cart[0][firstItem];
    var secondItem = Object.keys(cart[1]);
    var secondItemPrice = cart[1][secondItem];

    console.log( `${statement}${firstItem} at $${firstItemPrice} and ${secondItem} at $${secondItemPrice}.`);
  } else {
    var cartItems = [];

    for ( var i in cart ) {
      var item = Object.keys(cart[i]);
      var phrase = `${item} at $${cart[i][item]}`;

      cartItems.push(phrase);
    }

    var lastComma = cartItems.pop();
    console.log( `${statement}${cartItems.join(', ')}, and ${lastComma}.` );
  }
}

function total() {
  // write your code here
  var total = 0;
  var item;
  var itemPrice;

  for ( var i in cart ) {
    item = Object.keys(cart[i]);
    itemPrice = cart[i][item];
    total += itemPrice;
  }

  return total;
}

function removeFromCart(item) {
  // write your code here
  var found = false;

  for (var key in cart) {
    var theItem = Object.keys(cart[key]).toLocaleString();

    if ( item === theItem ) {
      found = true;
      cart.splice(Number(key), 1);
    }
  }

  if ( !found ) {
    console.log( "That item is not in your cart." );
  }

  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if ( cardNumber === undefined ) {
    console.log( "Sorry, we don\'t have a credit card on file for you." );
  } else {
    console.log( `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.` );
    cart.splice(0);
  }

}
