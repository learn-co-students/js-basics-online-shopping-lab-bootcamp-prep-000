var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100) + 1
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`)
  return  cart;
}

function viewCart() {
  let cartItem = ['In your cart']
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
    
  }
  else if(cart.length === 1){
    cartItem.push(`you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}`)
    console.log(`${cartItem.join(', ')}.`);
    
  }
  else{
    for(let i = 0; i < cart.length; i++){
      cartItem.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
      
    }
    if(cart.length > 2){
      console.log(`${cartItem[0]}, you have ${cartItem.slice(1,cartItem.length - 1).join(', ')}, and ${cartItem.slice(-1)}.`);
      
    }
    else {
      console.log(`${cartItem[0]}, you have ${cartItem.slice(1).join(' and ')}.`);
      
    }
    
  }
}

function total() {
  return cart.reduce(function(a,n){
    return a + Number(Object.values(n));
  },0)
}

function removeFromCart(item) {
 let found = cart.filter(function(e){
   return e.hasOwnProperty(item) === true;
   
 })
 if(found.length === 0){
   console.log('That item is not in your cart.')
   
 }
 else {
   for(let i = 0; i < cart.length; i++){
     if(cart[i].hasOwnProperty(item)){
       cart.splice(i,1)
       
     }
     
   }
 }
}

function placeOrder(cardNumber) {
  if(cardNumber){
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
 }
else{
  console.log(`Sorry, we don't have a credit card on file for you.`);
  
}
  
}

