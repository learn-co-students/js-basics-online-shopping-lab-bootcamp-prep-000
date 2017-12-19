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
 var newItem = {[item]: Math.floor(Math.random() * 100)};
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var shoppingCart = "";
  var itemName;
  var itemCost;
  if (cart.length === 0) {
    console.log("Your shopping cart is empty."); 
  } else if (cart.length <= 2) {
    for (var i = 0; i < (cart.length - 1) ; i++) {
      itemName = Object.keys(cart[i]);
      shoppingCart += `${itemName} at $${cart[i][itemName]} and `;
    }
    itemName = Object.keys(cart[i]);
    shoppingCart += `${itemName} at $${cart[i][itemName]}`;
    console.log(`In your cart, you have ${shoppingCart}.`);
} else {
  for (i = 0; i < (cart.length - 1) ; i++) {
      itemName = Object.keys(cart[i]);
      shoppingCart += `${itemName} at $${cart[i][itemName]}, `;
    }
    itemName = Object.keys(cart[i]);
    shoppingCart += `and ${itemName} at $${cart[i][itemName]}`;
    console.log(`In your cart, you have ${shoppingCart}.`);
  }
}


function total() {
  // write your code here
  var cartTotal = 0;
  var itemName;
  for (var i = 0; i < cart.length; i++) {
    itemName = Object.keys(cart[i]);
    cartTotal += cart[i][itemName];
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  var j = 0;
  for (var i = 0; i < cart.length; i++, j++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    } 
    }
  if (j === cart.length) {
    console.log("That item is not in your cart.");
    return cart;
  }
  
}

function placeOrder(cardNumber) {
  // write your code here
 if (!cardNumber) {
   console.log("Sorry, we don't have a credit card on file for you.");
 } else {
   var totalCost = total();
   console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`);
 }
 cart = [];
 }
