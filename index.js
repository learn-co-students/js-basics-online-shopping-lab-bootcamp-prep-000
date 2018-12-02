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
let price = Math.floor(Math.random()*100);
 cart.push({[item]:price});
 console.log(`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  if(!cart.length){
    console.log(`Your shopping cart is empty.`);
  }
  
  else{
     var array = [];
     for(var i = 0; i < cart.length; i++){
       var keys = object.keys(cart[i])[0];
       array.push(`${keys} at $${cart[i][keys]}`);
     }
     var output = `In your cart, you have `;
     if(cart.length===1){
       output += `${array[0]}.`;
     }
     else if(cart.length===2){
       output += `${array[0]} and ${array[1]}.`;
     }
     else if(cart.length>2){
       var middle = array.join(',');
       var last = array.pop();
       output += `${middle} and ${last}.`;
     }
     return`${output}`;
   }
}

function total() {
  // write your code here
 var  all = 0;
  for(var i=0; i<cart.length; i++){
    all += `{cart[i][object.keys(cart[i])]}`;
  }
   return all;
}

function removeFromCart(item) {
  // write your code here
   if(cart.hasOwnProperty(item)){
       for(var i = 0; i<cart.length; i++){
    cart = cart.slice(0,i).concat(cart.slice(i+1));
    return cart;
       }
   }
      else{
    return`That item is not in your cart.`;
     }
   }

var cardNumber = Math.floor(Math.random()*100000000);
function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
 const cartTotal = total();
 cart.length =0;
   return`Your total cost is $${cartTotal}; which will be charged to the card ${cardNumber}.`;
  }
  
  else{
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
