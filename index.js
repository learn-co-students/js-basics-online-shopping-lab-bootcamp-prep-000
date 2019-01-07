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
 var price = Math.floor(	Math.random() * (100 - 2)) + 1;
 cart.push( { [item]: price } );
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var sentence = "In your cart, you have";
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i=0; i<cart.length; i++) {
      var key = Object.keys(cart[i])[0];
      var value = cart[i][key];
      if ( i === cart.length-1 ) {
        sentence += ` ${key} at $${value}.`;
      } else if ( i === cart.length-2 && cart.length === 2) {
        sentence += ` ${key} at $${value} and`;
      } else if ( i === cart.length-2 && cart.length !== 2) {
        sentence += ` ${key} at $${value}, and`;
      } else {
        sentence += ` ${key} at $${value},`;
      }
    }
    console.log(sentence);
  }
}

function total() {
  // write your code here
  var total = 0
  for (var i=0; i<cart.length; i++) {
    var key = Object.keys(cart[i])[0];
    total += parseFloat(cart[i][key]);
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i<cart.length; i++) {
    if (item === Object.keys(cart[i])[0]) {
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
