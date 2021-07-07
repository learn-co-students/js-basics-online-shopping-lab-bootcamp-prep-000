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
 var obj = {};
 obj['itemName'] = item;
 obj['itemPrice'] = Math.floor(Math.random() * 101);
 if (cart.length === 0){
    cart[0] = obj;
 }
 else{
   cart.push(obj);
 }
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0 ){
    return 'Your shopping cart is empty.';
  }
  else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  var sentence = `In your cart, you have`;
  for (var i =0; i < cart.length - 1 ; i++){
    sentence = sentence + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
  }
  return `${sentence} and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
  
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length ; i++){
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var i = 0;
  if ( cart.length === 0){
    return 'That item is not in your cart.';
  }
  for ( var n = 0 ; n < cart.length ; n++){
    if (cart[n]['itemName'] === item){
      i = n;
    }
  }
  cart.splice(i , 1)
  return cart
}


function placeOrder(cardNumber) {
  if (Number.isInteger(cardNumber) ){
    var valtotal = total();
    cart.length = 0;
    return `Your total cost is $${valtotal}, which will be charged to the card ${cardNumber}.`;
  }
  else{
    return `Sorry, we don't have a credit card on file for you.`;
  }
  return;
}
