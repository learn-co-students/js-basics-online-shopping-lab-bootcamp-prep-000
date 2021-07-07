var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var price = Math.floor(Math.random()*100);
  
  var itemObj = {
    itemName: name, 
    itemPrice: price
  }
  cart.push(itemObj);
  return `${name} has been added to your cart.`;
}

function viewCart() {
   var nameAndPrice = [];
    
    if (cart.length === 0){
      return `Your shopping cart is empty.`;
      
    } else if (cart.length === 1) {
     return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
     
    } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      
   } else if (cart.length>=3){
      for (var i = 0 ; i < cart.length; i++){
        nameAndPrice.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`) 
      }
      
      return `In your cart, you have${nameAndPrice.slice(0,-1)}, and${nameAndPrice.splice(-1)}.`
   }
}

function total() {
  var totalCost = 0;
  
  for (var i = 0; i< cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}


function removeFromCart(item) {
 for (var i = 0; i < cart.length; i++) {
  if (cart[i].itemName === item) {
    cart.splice(i,1);
    return cart;
  }
} 
return `That item is not in your cart.`;
}


function placeOrder(cardNumber) {

  if (!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var chargeReply = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return chargeReply;
  }
}

