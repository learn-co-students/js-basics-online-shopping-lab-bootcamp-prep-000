var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var item = {[itemName]: Math.floor((1-Math.random())*100)};
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  else if (cart.length === 1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`);
  }
  else if (cart.length === 2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]} and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`);
  }  
  else {  
    var print = 'In your cart, you have ';
    for (var i = 0; i < cart.length; i++) {
      if (i === (cart.length - 1)) {
        print += `and ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}.`;
      }
      else {
        print += `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `;
      }
    }
    console.log(print);
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])[0]];
  }
  return total;
}

function removeFromCart(item) {
  var inCart = false;
  for (var i = 0; i < cart.length; i++) {
    if ( cart[i].hasOwnProperty(item) ) {
      cart.splice(i,1);
      inCart = true;
    }
  }
  if ( inCart === false ) {
    console.log('That item is not in your cart.')
    
  }
}

function placeOrder(cardNumber) {
  if ( cardNumber === undefined ) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []; // Empty the cart array
  }
}
