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
 let cartObj = {};
 cartObj.itemName = item;
 cartObj.itemPrice = Math.floor(Math.random()*100);
 
 cart.push(cartObj);
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let cartString = "In your cart, you have "
  
  if(cart.length === 1){
    cartString += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return cartString;
  }
  
  if(cart.length > 0){
    for(let i = 0; i < cart.length; i++){
      let cartItem = cart[i];
      if(i === cart.length - 1){
        cartString +=`and ${cartItem.itemName} at $${cartItem.itemPrice}.`
      }
      else{
        cartString += `${cartItem.itemName} at $${cartItem.itemPrice}, `;
      }
    }
  }
  else{
    return "Your shopping cart is empty."
  }
  return cartString;
}

function total() {
  // write your code here
  let cartTotal = 0;
  for(let i = 0; i < cart.length; i++){
    let cartItem = cart[i];
    
    cartTotal += parseInt(cartItem.itemPrice,10);
    
  }
  return cartTotal;
  
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    let cartItem = cart[i];
    if(cartItem.itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    let cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
