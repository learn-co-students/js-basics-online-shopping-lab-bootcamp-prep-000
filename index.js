var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {
    itemName: item,
    itemPrice: price()
 };
 
 function price(){
   return Math.floor(Math.random() * Math.floor(10));
 }
 
 cart.push(obj);
 
 return `${obj.itemName} has been added to your cart.`;
}

function viewCart() {
  if(!cart.length) return "Your shopping cart is empty.";
  
  var string = `In your cart, you have `;
  for(var i = 0; i < cart.length; i++){
    
    string = string + (cart.length > 1 ? ( cart[i+1] ? `` : `and `) : ``) + `${cart[i].itemName} at $${cart[i].itemPrice}` + (cart[i+1] ? `, ` : `.`);
  }
  return string;
}

function total() {
  var total = 0;
  
  for(var i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if(!cardNumber) return "Sorry, we don't have a credit card on file for you.";
  
  var string = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart.length = 0;
  
  return string;
}
