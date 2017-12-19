var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function genPrice(min=1, max=100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  //Will insert 1 and 100 when call upon in add to cart
}


function addToCart(item) {
 // write your code here
function addToCart(item) {
 // write your code here
var price = genPrice(1, 100);
var addition = { [item]: [price] };
//code for adding onto the array below
cart.push(addition);
//code 
console.log(`${item} has been added to your cart`)
return cart  
}


//console.log   //  "<itemName> has been added to your cart."   Do I use ${item} instead?
return cart;  
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
