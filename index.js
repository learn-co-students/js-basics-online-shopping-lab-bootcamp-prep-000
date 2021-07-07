var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 
 var price = Math.floor((Math.random()) * 100)
 
 var newitemobj = {itemName: item, itemPrice: price}
 
 
 
 
 cart.push(newitemobj)
 
 
 return (`${item} has been added to your cart.`)
 
 
 
}

function viewCart() {
 
 if (cart.length === 0){
   
   return ("Your shopping cart is empty.")
   
 }else if(cart.length===1){
   
   return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
   
 }else if(cart.length===2){
   
   return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
   
 }else{
   var i = 0
   var firstItems = []
   var lastItem = []
   
   
   while(i < cart.length){
     if(i<(cart.length - 1)){
       
       firstItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
       
     }else{
       
       lastItem.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
       }
     i= i +1
     
   }
   
   return ("In your cart, you have" + firstItems + lastItem)
 
 
 } 
   
   
}



function total() {
  var cartPrice = 0
  for (var i = 0; i< (cart.length); i++){
    
    cartPrice = cartPrice + cart[i].itemPrice
    
    
    
  }
  
  return cartPrice
  
}



function removeFromCart(item) {
  var initialLength = cart.length
  for (var i = 0; i<cart.length; i++){
    
    if(item === cart[i].itemName){
      
      cart.splice(i,1)
      
      
    }
    
  
    
  }
  if (cart.length<initialLength){
    
    return(cart)
    
  }else{
    
    return ("That item is not in your cart.")
  }

 
  
}

function placeOrder(cardNumber) {
  
  if(cardNumber === undefined){
    
    return ("Sorry, we don't have a credit card on file for you.")
    
    
  }else{
    
    var cartPrice = total()
    cart.splice(0,cart.length)
    
    return (`Your total cost is $${cartPrice}, which will be charged to the card ${cardNumber}.`)
    
    
  }
  
  
  
}

