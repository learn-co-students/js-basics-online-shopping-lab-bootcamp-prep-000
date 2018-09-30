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
 
 var itemDetail = {
   itemName : `${item}`,
   itemPrice : Math.random() * (100 - 1) + 1
 }
 cart.push(itemDetail);
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0)
  {
    return "Your shopping cart is empty.";
  }else if( cart.length === 1)
  {
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`;
    
  } 
  
  var stmt = "In your cart, you have ";
  
  for(var i = 0; i<cart.length; i++)
  {
    if( i== cart.length-1)
    {
     stmt += `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`; 
     
    }else{
      
      stmt += `${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `;
    }
  }
  

  return stmt;
  
}



function total() {
  // write your code here
  var sum = 0;
  var i =0;
  while( i< cart.length)
  {
    sum += cart[i]['itemPrice'];
    i++;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  
  for(var i=0; i<cart.length; i++){
  
  if(cart[i]['itemName'] == item)
  {
    cart.splice(i, 1);
    return cart;
  } 
  
  }
  
  return "That item is not in your cart.";
  
  
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined)
  {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var cost = total();
  cart = [];
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}




