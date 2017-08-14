var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = Math.floor(Math.random() * 100) + 1
 cart.push({${itemName}: ${itemPrice}})
 return `${itemName} has been added to your cart.`
 return cart;
}

function viewCart() {
  // write your code here
  var contents = [];
  if(!cart.length) {
    console.log('Your shopping cart is empty.');
  } else {
    for(var i = 0; i < cart.length; i++) {
      //var contents = [];
      contents.push(`${cart[i].keys(0)} at ${cart[i][cart[i].keys(0)]}`)
    }
  }
  return `In your cart, you have ${contents.join(', ')}.`
}


function total() {
  // write your code here
  total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i][cart[i].keys(0)];
  }
}

function removeFromCart(itemName) {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(itemName)) {
      delete cart[i][itemName];
    }
    return cart;
  }

}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
  return cart;
}
