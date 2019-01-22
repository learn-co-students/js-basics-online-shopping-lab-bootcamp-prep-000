var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


 
  function addToCart(item) {
  var itemObject = {itemName: item , itemPrice:(Math.floor(Math.random()* 100) + 1) };
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}
   
  
function viewCart() {
  if (cart.length === 0)
  return `Your shopping cart is empty.`;
  else if (cart.length === 1)
  {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;}
  else if (cart.length === 2)
  {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`}
  else if (cart.length === 3)
  {return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`}
}

function total () {
  var checkoutPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    checkoutPrice += cart[i].itemPrice;
  }
  return checkoutPrice;
}

 
function removeFromCart(item) {
  if (cart.length === 0) 
   {
    return "That item is not in your cart.";
   } 
    {
     for (var i = 0; i < cart.length; i++) {
     if (cart[i].itemName === item)  
   {
     var remove = cart.splice(i, 1);  
  return cart; 
     }
   }
  }
}


function placeOrder (cardNumber) {
  if (cardNumber === undefined)
   return "Sorry, we don't have a credit card on file for you.";
  
  var charge = [];
  var bill = `Your total cost is $${total(charge)}, which will be charged to the card ${cardNumber}.`;
  for (var i = 0; i < cart.length; i++)
  cart.pop();
  return bill;


}


  


