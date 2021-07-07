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
 var itemDetails = {itemName:`${item}`,
                    itemPrice:Math.floor(Math.random() * 100+1)}
                    cart.push(itemDetails)
                    return itemDetails.itemName + " has been added to your cart."
}

function viewCart() {
  if(cart.length===0){
    return "Your shopping cart is empty."
  }
 for(var i = 0; i < cart.length;i++){
   if(cart.length === 1){
     return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`
   }
   else if(cart.length ===2){
     return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i+1].itemName} at $${cart[i+1].itemPrice}.`
   }
    else if(cart.length ===3){
     return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i+1].itemName} at $${cart[i+1].itemPrice}, and ${cart[i+2].itemName} at $${cart[i+2].itemPrice}.`
   }
   
 }
}

function total() {
  var amount = 0
 for(var i = 0; i < cart.length;i++){
   amount += cart[i].itemPrice
 }
 return amount
}
function removeFromCart(item) {
for( var i = 0; i < cart.length;i++){
  if(item === cart[i].itemName){
    cart.splice(i,1)
    return cart
  }

  
}
  if(item != cart[item]){
    return "That item is not in your cart."
  }
}


function placeOrder(cardNumber) {
 var amount = total()
 if(!cardNumber){
   return "Sorry, we don't have a credit card on file for you."
 }
 else if(cardNumber){
   cart = []
   return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`
 }
}
