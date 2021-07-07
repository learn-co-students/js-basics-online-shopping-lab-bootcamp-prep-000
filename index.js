var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = `${item}`;
  var itemPrice = Math.floor(Math.random()*100);
  var newItem = {itemName,itemPrice};
  cart.push(newItem);
  return `${itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){ 
    return 'Your shopping cart is empty.'}
    else {
 var cartWording = 'In your cart, you have';
  for (var i=0; i < cart.length   ; i++) {
    
    if (cart.length === 1) { 
        cartWording += ` ${cart[i].itemName} at $${cart[i].itemPrice}.`}
    else{ 
      if (i < cart.length - 1) {
       cartWording += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
      } 
      else if (i === cart.length - 1) { 
       cartWording += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`    } }}
return cartWording
}}

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++){
    totalPrice += cart[i].itemPrice
  } 
  return totalPrice
}
  
function removeFromCart(item) {
 var itemGone = item
 function checkCart () {
 for (var i = 0; i < cart.length; i++)
   if (cart[i].itemName === itemGone) {  
     cart.splice(i, 1)}}
 if (checkCart() === true){}
 else { return 'That item is not in your cart.'}
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}









