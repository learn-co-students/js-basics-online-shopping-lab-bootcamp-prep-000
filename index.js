var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function addToCart(item) {                                                                    
  var string = item;
  item = {};
  
  item.itemName = string;
  item.itemPrice = parseInt(Math.random() * 100) + 1
  
  cart.push(item);
 
 return item.itemName + ' has been added to your cart.';
}

/////////////////////////////////////TEST/////////////////////////////////////////////////////////
addToCart('grapes');
addToCart('bananas');
addToCart('apples');
console.log(cart)
/////////////////////////////////////TEST/////////////////////////////////////////////////////////

function viewCart() {
 
  var string = 'In your cart, you have '
  var i = 0;
  
  
  if (!cart.length)
  
  {
    
    return 'Your shopping cart is empty.';
    
  }
  
  else if (cart.length === 1)
  
  {
    
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    
  }
  while (i < cart.length)
  
  {
    
    string += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    i++
    
    if (i === cart.length - 1)
    
    {
      
      string += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      return string;
    }
  }
  
  
}
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


function total() {
  var x = 0;
  
  for ( var n = 0; n < cart.length; n++)
  
  {
    
     x += cart[n].itemPrice
    
  }
  
  return x;
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++)
  
  {
    
    if (item === cart[i].itemName)
    
    {
      
      cart.splice(i, 1);
      return cart;
      
    }
    
   }
   
   return 'That item is not in your cart.';
}
console.log(total());
function placeOrder(cardNumber) {
  if (!cardNumber)
  
  {
    
    return `Sorry, we don't have a credit card on file for you.`
    
  }
  
  if (cardNumber)
  
  {
    
    var totaln = parseInt(total())
    
    for (var i = 0; i < cart.length; i++)
    
    {
      
      cart.splice(i,1)
      
    }
    
    
    return `Your total cost is $${totaln}, which will be charged to the card ${cardNumber}.`
    
  }
}

placeOrder(123);