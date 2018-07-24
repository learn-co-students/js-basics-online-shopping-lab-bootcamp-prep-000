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
 var new_item = {};
 var number = Math.floor(Math.random() * 100);
 
 
 new_item["itemName"] = item;
 new_item["itemPrice"] = number + 1;
 
 cart.push(new_item);
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  else
  {
      var message = "In your cart, you have ";
      
      for(let i = 0; i < cart.length; i++){
        
        if(cart.length === 1){
          return message += `${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
        else if(i === cart.length - 1){
          return message += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
        else{
          message += `${cart[i].itemName} at $${cart[i].itemPrice}, `
        }
      }
  }
}

function total() {
  // write your code here
  let total = 0;
  
  for(let i = 0; i < cart.length; i++){
    total += cart[i].itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here
  var i;
  
  for(i = 0; i < cart.length; i++){
    if(cart[i].itemName == item){
      break;
    }
  }
  
  if(i == cart.length){
    return "That item is not in your cart.";
  }
  else{
    cart.splice(i, 1);
    return cart;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  else{
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.length = 0;
    return message;
  }
}
