var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const itemName = item
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  var product = {[itemName]:itemPrice};
  
  cart.push(product);
  console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var items = getCart();
  var youHave = "In your cart, you have ";
  var message ="";
  if(items.length===0){
    console.log('Your shopping cart is empty.');
    }
  
  else if(items.length===1){
    console.log(`In your cart, you have ${Object.keys(items[0])} at $${Object.values(items[0])}.`)
    }
  
  else if(items.length===2){
    console.log(`In your cart, you have ${Object.keys(items[0])} at $${Object.values(items[0])} and ${Object.keys(items[1])} at $${Object.values(items[1])}.`);
    }
   else
   {
     for(let i = 0; i < items.length; i++){
       if(i<items.length-1){
         message+= `${Object.keys(items[i])} at $${Object.values(items[i])}, `;
       }
       
       else{
         message+= `and ${Object.keys(items[i])} at $${Object.values(items[i])}`
       }
     }
     console.log(`In your cart, you have ${message}.`)
   } 
  
}

function total() {
  var total = 0;
   for( var price in cart ) {
     
    total = total + parseInt(Object.values(cart[price]));
    
  }
  return total;
  
}

function removeFromCart(item) {
  for(let i = 0; i<cart.length; i++){
     if(item === Object.keys(cart[i]).toString()){
       cart.splice(i, 1)
       return cart
     }
   }
   console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(cardNumber == null){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    
    cart.splice(0,cart.length)
  }
}