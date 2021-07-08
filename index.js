
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newPrice = Math.floor(Math.random() * 100) + 1;
 
 var itemGroup = new Object ({ itemName: item, itemPrice: newPrice}); 
 cart.push(itemGroup);

return `${item} has been added to your cart.`;
  
}

function viewCart(){
 if(cart.length === 0){
   return 'Your shopping cart is empty.';
 }else if(cart.length === 1){
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
 }else if(cart.length === 2){
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
 }else if(cart.length === 3){
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
 }
 
}

function total() {
 var total = 0 ;
  
 for(var i = 0; i < cart.length; i++){
  total += cart[i].itemPrice ;
  
 }return total;
}


function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i]['itemName'] === item) {
      return cart.splice(i, 1)
    }
  }
  
  return 'That item is not in your cart.'
}


function placeOrder(cardNumber) {
  
 
    if(arguments[0] === undefined){
      return "Sorry, we don't have a credit card on file for you." 
    }
    
    for(var i = 0; i < cart.length; i++) {
      if(cardNumber > 0){
      var cost = total()
      cart = []
      return  `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
   
    }
      
      
    }
    }
  
  

