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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var tmpStr = "In your cart, you have"
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  for (var i=0; i<cart.length; i++) {
    for (var item in cart[i]) {
      if(i === cart.length-1) {
        tmpStr += ` ${item} at $${cart[i][item]}.`
      } else {
        tmpStr += ` ${item} at $${cart[i][item]},`
      }
    }
  }
  console.log(tmpStr);
  return;
}

function removeFromCart(item) {
  var index = -1;
  for(var i = 0; i < cart.length; i += 1) {
   if(cart[i].hasOwnProperty(item)) {
     index = i;
   }
  }
  if(index >= 0) {
   cart.splice(index,1);
   return cart;
  } else {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
  if(isNaN(cardNumber)) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0;
  }
}
