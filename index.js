
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var newObj = {
    'itemName': item,
    'itemPrice': Math.floor(Math.random()*100)
  }
  cart.push(newObj)
  
  return `${item} has been added to your cart.`;
}

function viewCart() {

    var itemContainer = [];
    for( var i = 0; i < cart.length; i++)
    {
      if( i===0 || i < cart.length-1)
      {
      itemContainer[i] = ` ${cart[i].itemName} at $${cart[i].itemPrice}`; 
      } else
      {
        itemContainer[i] = ` and ${cart[i].itemName} at $${cart[i].itemPrice}`; 
      }
    }
    
    itemContainer.join(', ')
    
    if (cart.length === 0) {
      return 'Your shopping cart is empty.';
      } else
      {
        return `In your cart, you have${itemContainer}.`; 
      }
  {
  }
  
}

function total() {
  
  var total = 0;
  for (var i = 0 ; i < cart.length ; i++)
  {
    total += cart[i]['itemPrice'];
  }
  return total;
}

function removeFromCart(item) {
  
  var itemFinder = 0;  
 for (var i = 0; i < cart.length; i++)
 {
   if (cart[i].itemName === item)
   {
     cart.splice(i, 1); 
     itemFinder = 1;
   }
 }
 if(itemFinder === 0)
 {
   return "That item is not in your cart."
 }
  return cart;
  
}

function placeOrder(cardNumber) {
  if(isNaN(cardNumber))
  {
    return "Sorry, we don't have a credit card on file for you."
  } else
  {
    var finalCost = total();
    cart = [];
    return `Your total cost is $${finalCost}, which will be charged to the card ${cardNumber}.`; 
    
  }
  
}