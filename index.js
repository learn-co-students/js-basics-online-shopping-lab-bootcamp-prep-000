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
 
 item = {itemName : item , itemPrice : Math.floor(Math.random() * (100 - 1 +1)+1)};
 
 cart.push(item);
 
 return `${item.itemName} has been added to your cart.`;
}



function viewCart() {
  
 var currentCart = getCart();

  if(cart.length === 0) {return 'Your shopping cart is empty.'}

  var itemsWithPrice=[];
  for(let i = 0; i < cart.length; i++){
    
  itemsWithPrice.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  
  if(cart.length > 1) {
  
   var last = itemsWithPrice.pop();
   return 'In your cart, you have ' + itemsWithPrice.join(', ') +', and '+ last + '.';
  }
  return 'In your cart, you have ' + itemsWithPrice.join(', ') + '.';
}






function total() {
  // write your code here
  var sum = 0;
  for(let i=0; i < cart.length; i++){
   sum += cart[i].itemPrice;
  }
  return sum;
}




function removeFromCart(item) {
  // write your code here
  var currentCart = getCart();
  for(let i =0; i< cart.length; i++) {
    
    if(item === currentCart[i].itemName) { 
      currentCart.splice(i,1);
    	return currentCart
    }
  
  }
  return 'That item is not in your cart.';
}





function placeOrder(cardNumber) {
  // write your code here
  var currentCart = getCart();
  if(cardNumber ===undefined ) {return 'Sorry, we don\'t have a credit card on file for you.'}
  else {var Price = total();
  cart = [];
  return `Your total cost is $${Price}, which will be charged to the card ${cardNumber}.`;
  }
  
  
}
