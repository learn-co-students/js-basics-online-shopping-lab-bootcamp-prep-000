var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// function getRandom(){
//   return Math.floor(Math.random() * Math.floor(100))
// }
function addToCart(item) {
 // write your code here
  var shopping = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * Math.floor(100))
 };
 cart.push(shopping);
return `${shopping.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    return `Your shopping cart is empty.`;
    
  } 
  
  for(var i = 0; i < cart.length; i++){
      if(cart.length == 1){
    
      return `In your cart, you have ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
   
       }else if(cart.length == 2){
    
          return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
      }
      
   } 
  
  
}

function total() {
  // write your code here
  
  var totalCost;
  for(var i= 0; i < cart.length; i++){
    totalCost = getCart()[i] + totalCost;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here
  
}

function placeOrder(cardNumber) {
  // write your code here
}
