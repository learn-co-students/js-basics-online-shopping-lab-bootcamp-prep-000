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
 var price = Math.floor((Math.random() * 100) + 1 );
 cart.push(new Object({itemName:item, itemPrice:price}));
 return `${item} has been added to your cart.`
}
function viewCart() {
  // write your code here
if(cart.length === 0){
  return `Your shopping cart is empty.`;
}


  if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if(cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
   else{
   var startingString = `In your cart, you have `;
   let i = 0;
   
   for( i;i < cart.length-1;i++){
     startingString += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
   }
startingString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
return startingString;
}
}




function total() {
  // write your code here
  var addPrice =0;
  for(let i=0;i<cart.length;i++){
    addPrice += cart[i].itemPrice;
  }
  return addPrice;
}

function removeFromCart(item) {
  // write your code here
  for(let i=0; i < cart.length;i++){
    if(cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  
  }
    return `That item is not in your cart.`;
  }


function placeOrder(cardNumber) {
  // write your code here
  function empty(){
    cart=[];
  }
    if(placeOrder(cardNumber) === placeOrder(cardNumber)){
      empty();
      return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    }
   else if(placeOrder() === placeOrder()){
     
     return `Sorry, we don't have a credit card on file for you.`;
   }

}