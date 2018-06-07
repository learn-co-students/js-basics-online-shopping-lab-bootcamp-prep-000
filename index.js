var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 
 var items = {itemName: itemName, itemPrice: (Math.floor(Math.random()*100)) };
 
 cart.push(items);
 
 return (`${itemName} has been added to your cart.`)
 
 
 
 
}

function viewCart() {

if (cart.length === 0){
    
    return 'Your shopping cart is empty.';
    
  } else if(cart.length === 1) {
    
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
      
   }else if (cart.length === 2) {
     
     
     return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
     
   }else {
     
   
     for ( let i = 0; i < cart.length - 1; i++){
     
     return (`In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i+1].itemName} at $${cart[i+1].itemPrice}, and ${cart[i+2].itemName} at $${cart[i+2].itemPrice}. `);
     
   }
   
   
  }
}
  

function total() {
  
  var total = 0;
  
  for (let i = 0; i < cart.length; i++){
  
  total += cart[i].itemPrice
  
  }
  
  
return total;
}

function removeFromCart(item) {
   
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
     cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  if (cardNumber){
    
    
    let Cost = total();
    
    cart = [];
    
    return `Your total cost is $${Cost}, which will be charged to the card ${cardNumber}.`
    
  
    
    
  }else {
     
      return "Sorry, we don't have a credit card on file for you."
    
    
  }
}
