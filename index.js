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
 let price = Math.floor(Math.random()*100)+1;
 cart.push( {itemName : item, itemPrice: price});
 return`${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    return`Your shopping cart is empty.`;
  }
  
  else{
     var array = [];
     for(var i = 0; i < cart.length; i++){
 array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
     }
     var output = `In your cart, you have `;
     if(cart.length===1){
       output += `${array[0]}.`;
     }
     else if(cart.length===2){
       output += `${array[0]}, and ${array[1]}.`;
     }
      else if(cart.length>2){
          var last = array.pop();
        var middle = array.join(', ');
       output += `${middle}, and ${last}.`;
     }
     return`${output}`;
   }
}

function total() {
  // write your code here
   var  all = 0;
  for(var i=0; i<cart.length; i++){
    all += cart[i].itemPrice;
  }
   return all;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i<cart.length; i++){
   if(cart[i].itemName === item){
       cart.splice(i,1);
      return cart;
     } 
    }
    return`That item is not in your cart.`;
}
   
var cardNumber = Math.floor(Math.random()*100000000)+1;
function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
 cart.length =0;
   return`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  }
  
  else{
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
