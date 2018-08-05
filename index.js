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
   function getRand(){
    return Math.floor(Math.random()*(100 - 1 + 1) + 1)
  }
 return cart.push({itemName: item, itemPrice: getRand()}), `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0) return `Your shopping cart is empty.`;
  
  return cart.reduce((a,b,c,d)=>{
      if(cart.length === 1){
         return a += `${b.itemName} at $${b.itemPrice}.` 
      } else if(c !== cart.length - 1){
        a += `${b.itemName} at $${b.itemPrice}, ` 
      } else {
        a += `and ${b.itemName} at $${b.itemPrice}.`
      }
      return a;
  }, 'In your cart, you have ')  
}

function total() {
  // write your code here
    return cart.reduce((a,b,c,d)=>a+b.itemPrice,0);
}

function removeFromCart(item) {
  // write your code here
for(let i = 0; i < cart.length; i++){
  if(cart[i].itemName === item){
    cart.splice(i,1)
    return cart;
  }
}
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  // write your code here
  let message;
  if(!cardNumber) {message = `Sorry, we don't have a credit card on file for you.`
  } else {
  message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`} ;
  cart.length = 0;
  return message;
}
