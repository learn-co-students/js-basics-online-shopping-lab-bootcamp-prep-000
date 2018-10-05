var cart = [];


function getCart() {
  
 return cart;
 
}

function setCart(c) {
  
  cart = c;
  return cart;
  
}

function addToCart(item) {
  
var price = Math.floor(Math.random()*100);
  
var itemAndPrice = {
  itemName: item,
  itemPrice: price
};
  
cart.push(itemAndPrice);

 return `${item} has been added to your cart.`;
}


function viewCart() {

var i;
  var output;
  if (cart.length === 0) 
  {
    return `Your shopping cart is empty.`;
  } 
  else if (cart.length === 1) 
  {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    
  } 
  else if (cart.length === 2) 
  {
    
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } 
  else 
  {
    
    output = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice},`;
    for (i = 2; i < cart.length; i++) 
    {
      if (i === cart.length - 1)
      {
        output = output.concat(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      } 
      else
      {
        output = output.concat(` ${cart[i].itemName} at $${cart[i].itemPrice},`);
      }
    }
    return output;
  }

}



    
 function total() 
{
    
 
  var totalPrice = 0;
  
  for(var i = 0; i < cart.length; i++) 
  {
    
    totalPrice += cart[i].itemPrice
    
    
  }
  
  return totalPrice;

}



function removeFromCart(item) {

  
 
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      
       cart.splice(i, 1);
       return cart;
       
     
    }
  }
  
   
  return `That item is not in your cart.`;
   
}


function placeOrder(cardNumber) {

  if (cardNumber)
  {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    for (var i = cart.length; i>= 0; i--) 
    {
      cart.pop();
      
        return cart;
     }
  }
  return `Sorry, we don't have a credit card on file for you.`


  for (i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice([i], 1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`);
  return cart;
}

function placeOrder(cardNumber) {

  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (var i = cart.length; i>= 0; i--) {
      cart.pop();
  }
  }
  console.log(`Sorry, we don't have a credit card on file for you.`);
  return cart;

}



