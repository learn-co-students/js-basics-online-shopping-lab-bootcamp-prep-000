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
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}