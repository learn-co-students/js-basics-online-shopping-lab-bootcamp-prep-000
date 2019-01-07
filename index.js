var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var buyMe = { [item]: Math.floor(Math.random()*99 +1) };
  cart.push(buyMe);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var message;
  if(cart.length === 0) {
    message = "Your shopping cart is empty.";
  }
  else if(cart.length === 1) {
    message = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  }
  else if(cart.length ===2) {
    message = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  }
  else {
    message = "In your cart, you have ";
    for(var i=0; i<cart.length-1; i++) {
      message += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `;
    }
    message += `and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
  }
  console.log(message);
  return message;
}

function total() {
  var sum=0;
  for(var i=0; i<cart.length; i++) {
    sum += cart[i][Object.keys(cart[i])];
  }
  return sum;
}

function removeFromCart(item) {
  for(var i=0; i<cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  return cart;
}
