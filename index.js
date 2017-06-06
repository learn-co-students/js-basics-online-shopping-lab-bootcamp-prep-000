var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(items) {
  var price = Math.floor(Math.random() * (100));
  var itemPrice = new Object({[items]: price});
  cart.push(itemPrice);
  console.log(`${items} has been added to your cart.`);
  return cart
}

function viewCart() {
  if (cart.length <= 0) {
    console.log( "Your shopping cart is empty." );
  } else {
    var product = [];
    for (var i = 0, counter = cart.length; i < counter; i++) {
      for (var item in cart[i]) {
        product.push(item + " at $" + cart[i][item]);
      }
    }
    console.log( `In your cart, you have ${product.join(", ")}.` );
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if ( cart[i].hasOwnProperty(item) === true ) {
      cart.splice(i, 1);
    }
  }
  console.log( "That item is not in your cart.");
  return cart
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t
}

function placeOrder(cardNumber ) {
  if ( cardNumber  === undefined ) {
    console.log( "We don't have a credit card on file for you to place your order." );
  } else {
    console.log( `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.` );
    while (cart.length > 0) {
    cart.pop();
    }
  }
  return cart
}
