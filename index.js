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
 cart.push({itemName: item, itemPrice: Math.floor((Math.random()*100)+1)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  else {
      var output = "In your cart, you have ";
      for (var i=0; i<cart.length; i++) { 
        
        if(cart.length === 1) {
         output += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
          }
          
        else if(i === cart.length-1) {
           output += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
          }
          
        else {
          output += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
          }
          
        }
      return output;
    }

}

function total() {
  // write your code here
  var total = 0;
  for(var i=0; i<cart.length; i++) {
    total += cart[i].itemPrice;
  } return total;
}

function removeFromCart(item) {
  // write your code here
  for(var i=0; i<cart.length; i++) {
    if(cart[i].itemName === item) {
      return cart.splice(i,1);
    }
  } return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  else {
    return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.${setCart([])}`
  }

 
}
