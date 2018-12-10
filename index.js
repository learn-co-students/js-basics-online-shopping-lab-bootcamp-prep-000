var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
 
  cart = c;
  return cart;
}

function addToCart(item) {
    
    var newItem = new Object( { itemName: (item) ,  itemPrice: (Math.floor(Math.random() * 100) + 1 ) } );
    cart.push(newItem);
    return `${item} has been added to your cart.`;
}

function viewCart() {
  
  if (cart.length === 0 ) {
      return `Your shopping cart is empty.`;
  }
  
  if (cart.length === 1) {
    return`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
   else {
   
    var newString = "In your cart, you have "
      
    for ( var i = 0; i < getCart().length; i++ ) {
      if ( i != getCart().length-1 ) {
      newString = newString + `${getCart()[i].itemName} at $${ getCart()[i].itemPrice}, `
      } else {
        newString = newString + `and ${getCart()[i].itemName} at $${ getCart()[i].itemPrice}.`
      }
     } 
   return newString
     
   }
   
}



  
function total() {

    var totalPrice =  0;
   
    for(var i = 0; i < getCart().length; i++) {                  
          totalPrice += getCart()[i].itemPrice ;
    }
     return totalPrice;
  }

function removeFromCart(item) {
    
     for (var i = 0; i < getCart().length; i++) {
        
        if ( getCart()[i].itemName === item ) {
          
          return getCart().splice( i, 1 ) ;
           
          
        }
      } 
          return 'That item is not in your cart.';
            
}

function placeOrder(cardNumber) {
    
   var grandTotal = total()
    
    if (cardNumber){
    
        setCart([])
  
    return`Your total cost is $${grandTotal}, which will be charged to the card ${cardNumber}.`
  
  } else {
    
    return `Sorry, we don't have a credit card on file for you.`
  }
}