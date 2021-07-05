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
 var itemPrice = Math.floor(Math.random() * 100) + 1;
 var itemName = item;
 var addItem = { [item] : itemPrice };
 cart.push(addItem);
 console.log(`${[item]} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var shoppingCart = [];
  var message = 'In your cart, you have';
  
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } 
  else {
   
  for (var i = 0; i < cart.length; i++) {
  
  var itemKey = Object.keys(cart[i]);
  var itemValue = cart[i][itemKey];
  shoppingCart.push(`${itemKey} at $${itemValue}`);
 
  if (cart.length === 1) {
    console.log(`${message} ${shoppingCart}.`);
  } 
  else if (cart.length === 2) {
    console.log(`${message} ${shoppingCart.join(' and ')}.`);
  } 
  else {
    console.log(`${message} ${shoppingCart.slice(0, shoppingCart.length - 1).join(', ')}, and  ${shoppingCart.slice(-1)}.`);
    console.log(`${message} ${shoppingCart.slice(0, shoppingCart.length - 1).join(', ')}, and ${shoppingCart.slice(-1)}.`);
      }
    }
  }
}

function total() {
  // write your code here
  var sumTotal = 0;
  for (var c = 0; c < cart.length; c++) {
    var itemCost = cart[c][Object.keys(cart[c])];
    sumTotal += itemCost;
  }
  return sumTotal;
}

function removeFromCart(item) {
  // write your code here
  for (var k = 0; k < cart.length; k++) {
    if (cart[k].hasOwnProperty(item)) {
      cart.splice(k, 1);
      return cart;
    }
  }
    console.log('That item is not in your cart.');
    return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (var m = cart.length; m > 0; m--) {
      cart.pop();
    }
  }
}
