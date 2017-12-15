var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push( {[item] : Math.floor(Math.random() * 100 )+ 1 } );
 console.log (`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {

  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1){

var key = Object.keys(cart[0])[0];
var value = cart[0][key]
console.log(`In your cart, you have ${key} at $${value}.`);
  } else if (cart.length === 2){
    var keys = [ Object.keys(cart[0])[0], Object.keys(cart[1])[0] ];
var value1 = cart[0][keys[0]];

console.log(`In your cart, you have ${keys[0]} at $${cart[0][keys[0]]} and ${keys[1]} at $${cart[1][keys[1]]}.`);

  } else {
    var keys = [];
for (var i = 0; i< cart.length; i++){
  keys.push( Object.keys(cart[i])[0]);
}

//var keys = [ Object.keys(cart[0])[0], Object.keys(cart[1])[0],Object.keys(cart[2])[0]  ];
console.log(keys);
var outputString = "In your cart, you have ";
for (var j = 0; j <cart.length-1; j++){
  outputString += `${keys[j]} at $${cart[j][keys[j]]}, `;
}
outputString += `and ${keys[keys.length-1]} at $${cart[keys.length-1][keys[keys.length-1]]}.`;
console.log(outputString);
  }
}

function total() {
  var value = 0;
  var keys = [];

  for (var i = 0; i < cart.length; i++){
    keys.push( Object.keys(cart[i])[0]);
    value += cart[i][keys[i]];
  }
  return value;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined){


    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");

  }
}
