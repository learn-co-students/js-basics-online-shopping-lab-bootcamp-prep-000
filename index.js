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
 function randomPrice(){
   return Math.floor((Math.random() * 100)+1);
 }
 cart.push({[item]: randomPrice()});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  
  if(!cart.length){
    console.log('Your shopping cart is empty.');
    return;
  }
  
  var result = 'In your cart, you have ';
  result += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}`;
  
  for(var i=1; i<cart.length -1; i++){
    result += `, ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`;
  }
  
  if(cart.length>2){
    result += ',';
  }
  
  if(cart.length > 1){
    result += ` and ${Object.keys(cart[cart.length -1])} at $${cart[cart.length-1][Object.keys(cart[cart.length -1])]}`;
  }
 
  result += '.';
  console.log(result);
}

function total() {
  // write your code here
  var total = 0;
  for(let item of cart){
    total += item[Object.keys(item)];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var startLength = cart.length;
  for(var i=0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
    }
  }
  if(startLength===cart.length){
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
