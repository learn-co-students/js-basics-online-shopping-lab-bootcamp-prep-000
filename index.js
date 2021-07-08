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
 
 if(item === "" || item === undefined)
  return "Please specify an item";
  
 var price = Math.floor((Math.random() * 100) % 100);
 var object = { itemName: item, itemPrice: price };
 
 cart.push(object);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  
  if(cart.length === 0)
    return "Your shopping cart is empty.";
    
  var message = "In your cart, you have";
  
  for(var i = 0; i < cart.length; i++) {
    if(i !== 0 && i === cart.length-1)
      message = message + " and";
      
    message = message + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
  }
  
  message = message.slice(0,-1) + ".";
  return message;

//--------------------Using a Do While loop -------------------//  
/*  
  var i = 0;
  
  do{
    message = message + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    i++;
  } while (i < cart.length-1)
  
  
  if(cart.length > 1)
    message = message + ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
  else
    message = message.slice(0,-1) + "."; 
  
  return message; 
*/
}

function total() {
  // write your code here
  
  var total = 0;
  
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here
  
  var found = false;
  
  for(var i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cart.splice(i, 1);
      found = true;
      break;
    }
  }
  
  if(found)
    return cart;
  else
    return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  
  if(cardNumber === "" || cardNumber === undefined)
    return "Sorry, we don't have a credit card on file for you.";
  
  var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  
  cart.length = 0;
  
  return message;
}

console.log(addToCart("test1"));
console.log(addToCart("test2"));
console.log(viewCart());
console.log(total());
console.log(placeOrder("123456789"));
