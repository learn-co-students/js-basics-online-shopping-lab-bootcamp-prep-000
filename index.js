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
 var newItem = new Object({[item]: Math.floor(100*Math.random())});
 cart.push(newItem);
 if (cart.length===0) {
   console.log("Your shopping cart is empty.");
 }
 else {
   console.log([item] + " has been added to your cart.");
 }
 return cart;
}

function viewCart() {
  // write your code here
  var k = 1;
  var msg = "In your cart, you have ";
  if (cart.length===0){
    console.log("Your shopping cart is empty.");
  }
  ///////0 and 1 item carts WORKING!!
  else if (cart.length===1) {
    var itemKey = Object.keys(cart[k-1]);
    msg = msg + itemKey + " at $" + cart[k-1][itemKey] +".";
    console.log(msg);
  }
  else if (cart.length===2) {
    itemKey = Object.keys(cart[k-1]);
    msg = msg + itemKey + " at $" + cart[k-1][itemKey] +" and ";
    ++k;
    itemKey = Object.keys(cart[k-1]);
    msg = msg + itemKey + " at $" + cart[k-1][itemKey] +".";
    console.log(msg);
  }
  else {
    for (var i = 0; i<cart.length-1; i++) {
      itemKey = Object.keys(cart[i]);
      msg = msg + itemKey + " at $" + cart[i][itemKey] + ", " 
    }
    console.log(i);
    itemKey = Object.keys(cart[i]);
    msg = msg + "and " + itemKey + " at $" + cart[i][itemKey] + ".";
    console.log(msg);
  }
}

function total() {
  // write your code here
  var runningTotal = 0;
  var itemKey = 0;
  for (var k = 0; k<cart.length; k++) {
   itemKey = Object.keys(cart[k]);
   var itemPrice = parseInt(cart[k][itemKey]);
   runningTotal = runningTotal + itemPrice;
  }
  return runningTotal;
}

function removeFromCart(item) {
  // write your code here
  for (var j = 0; j < cart.length; j++) {
    var itemKey = Object.keys(cart[j])[0];
    console.log(itemKey);
    console.log(item);
    if (itemKey===item) {
      cart.splice(j,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
  var msg = "Your total cost is $" + total() + ", which will be charged to the card " + [cardNumber] + "."; 
  console.log(msg);
  cart = [];
  }
}

addToCart('bananas');
addToCart('apples');

removeFromCart('bananas');