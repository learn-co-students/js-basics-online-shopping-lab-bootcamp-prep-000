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
 let price = Math.floor(Math.random()*Math.floor(100));
 var cartItem = {itemName:item, itemPrice:price};
 cart.push(cartItem);
 return `${cartItem.itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length!==0){
    let string = "In your cart, you have ";
    
    if(cart.length == 1){
      string += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
      return string;
    }
    
    for(let i=0; i < cart.length;i++){
      
      if(i != cart.length-1){
        string += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }else{
        string += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
    }
    
    return string;
  }else{
    return "Your shopping cart is empty."
  }
  
}

function total() {
  // write your code here
  let total = 0;
  for(let i=0;i < cart.length; i++){
    total += cart[i].itemPrice;
    
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(let i=0;i < cart.length; i++){
    if(item == cart[i].itemName){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  let temp = total();
  if(cardNumber !== undefined ){
    cart.splice(0,cart.length);
    return `Your total cost is $${temp}, which will be charged to the card ${cardNumber}.`
  }else{
    return "Sorry, we don't have a credit card on file for you."
  }
}
