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
function getCart(){
  return cart
}
function addToCart(item){

  var price = Math.floor((Math.random() * 100));
  var obj = {};
  obj[item]= price;
cart.push(obj)
  console.log(`${item} has been added to your cart.`)
return cart
}
function viewCart(){
var arrayMsg= [];

  for (var i=0; i<cart.length; i++){
//var item = Object.keys(cart[i]);
    for (var itemName in cart[i]){
	arrayMsg.push(`${itemName} at \$${cart[i][itemName]}`)
  console.log(`In your cart, you have ${arrayMsg.join(', ')}.`)
      }
  }

if (cart.length <1){
    console.log("Your shopping cart is empty.")
  }
  }

  function removeFromCart(itemName){
    for (var i=0; i<cart.length; i++){
  var keyName = Object.keys(cart[i]);
  if (keyName == itemName)
  {cart.splice([i], 1)}
  return cart  }
if (keyName !== itemName) {
  console.log ('That item is not in your cart.')
}
}

function placeOrder(card){
  var cardNumber = card
  if ( cardNumber == undefined ){
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  if (cardNumber ){
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0);
    return cart;
  }
}
