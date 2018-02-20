var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function addToCart(item) {
 // write your code here
 var price = getRandomIntInclusive(1,100);
 var cartItem = {[item] : price};
 cart.push(cartItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  
  var cartString = 'In your cart, you have';
  for(let i = 0; i < cart.length; i++) {
    var currentItem = cart[i];
    var itemName = Object.keys(currentItem)[0];
    var itemPrice = currentItem[itemName];
    var addString = `${i>0&&cart.length>2?',': ''} ${i>0&&i===cart.length-1?'and ':''}${itemName} at $${itemPrice}${i===cart.length-1?'.':''}`
    cartString = cartString + addString;
  }
  console.log(cartString);
  
}

function total() {
  // write your code here
  var total = 0;
  for(let i = 0; i < cart.length; i++) {
    var currentItem = cart[i];
    var itemName = Object.keys(currentItem)[0];
    var itemPrice = currentItem[itemName];
    total += itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here
  var found = false;
  for(let i = 0; i < cart.length; i++) {
    var currentItem = cart[i];
    if(currentItem.hasOwnProperty(item)) {
      found = true;
      cart.splice(i,1);
    }
  }
  if(!found) {
    console.log('That item is not in your cart.');
  }
  
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === null || cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you." );
  }
  
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
