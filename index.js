var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){  
var c = {itemName: `${item}`, itemPrice: (Math.floor((Math.random()*100)+1))}

    cart.push(c);
 
    return `${item} has been added to your cart.`; 
}

function viewCart() {
  if( cart.length < 1){
    return 'Your shopping cart is empty.';
  }

  if( cart.length === 1){
  return  `In your cart, you have ${cart[0].itemName}  at ${cart[0].itemPrice}.`;
    
  }
  
  for( var i = 0; i < (cart.length - 1); i++)
  
    
    
}

function total() {
  var p = [];
  var t = 0;
  for(var i = 0; i < cart.length; i++){
  p.push(cart[i].itemPrice)
 
 t += p[i];
  }
  return t;
  
}

function removeFromCart(item) {
    
    for( var i = 0; i < cart.length; i++ ){
  
  if (item === cart[i].itemName) {
  cart.splice(i, 1);
  return cart;
  }}
   return 'That item is not in your cart.';
   } 


function placeOrder(cardNumber) {

  if(cardNumber === undefined){
   return "Sorry, we don't have a credit card on file for you."; 
  }

else{ 
  var t = total();
  cart = []
  return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`;
  
}

}













