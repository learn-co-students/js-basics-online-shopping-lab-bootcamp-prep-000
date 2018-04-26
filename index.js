var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
////////////////done/////////////////////////
function addToCart(item) {
 //console.log(item)
// var min
// var max
//  min = Math.ceil(1);
//  max = Math.floor(100);
// var price = Math.floor(Math.random() * (max - min)) + min; 
  var price = Math.floor(Math.random() * (100- 1)) + 1; 
 
  var itemObj = {itemName: item, itemPrice: price };
  cart.push(itemObj)
 
 // return `${itemObj.itemName} has been added to your cart.`
 
 return `${item} has been added to your cart.`
 
}

function viewCart() {
  // write your code here
  var str = "In your cart, you have "
  var item 
  var price 
  
  if(cart.length === 0){
    return"Your shopping cart is empty."
  }
  else if (cart.length === 1){
  
    return str += cart[0]["itemName"] + " at "+ "$" + cart[0]["itemPrice"] + "."
  }
  else if(cart.length > 1){ 
    for(var i =0; i<cart.length; i++){
       item = cart[i]["itemName"]
       price = cart[i]["itemPrice"]
    
    
    if(i < cart.length-1){
       str += cart[i]["itemName"] + " at "+ "$" + cart[i]["itemPrice"]  + ", "
       }
       
      else{str += "and " + cart[i]["itemName"] + " at "+ "$" + cart[i]["itemPrice"]+ "."
        
      }
  }
}
return str
}
// getCart ()

  
 
 
 

  
 
 
 
 
 
 
 
 
 /* 
  if(cart[cart.length-1]){
  var cartItemsPrice = newCart.join(`, and `)
  return "In your cart, you have " + cartItemsPrice + "."
  }
  else{
    var NewcartItemsPrice = newCart.join(`, `)
  return "In your cart, you have " + NewcartItemsPrice + "."
   
        
        return message
        
      }*/
      
  

function total() {
// var item = 0
  var price = 0
  for(var i = 0; i< cart.length; i++)
  {
    price += cart[i]["itemPrice"]
  }
    return price
}

function removeFromCart(item) {
 
/*
 if(cart.indexOf(item)===-1){
   return `That item is not in your cart.`
   }
  
  else{
for(var i = 0;i<cart.length; i++){
    
    var cartItem = cart[i]["itemName"]
 /// var cartItem = cart[i]
    
    
      if(cartItem === item)
         
        //newCart.push(cartItem)
       cart.splice(i, 1)
       return cart;
       
         
      }
      
  }
  
  
 return cart
}*/
 
 ///////////////////////////////////////
for(var i = 0;i<cart.length; i++){
    
    var cartItem = cart[i]["itemName"]
  ///var cartItem = cart[i]
    
    
    if(cartItem === item){
         
        //newCart.push(cartItem)
       cart.splice(i, 1)
       return cart;
       
         
      }
 
 
 
  }
  //////////////////////////////////////////
  return `That item is not in your cart.`
 }

////////////done///////////////////////
function placeOrder(cardNumber) {
  // write your code here

  
  if(cardNumber){ 
    
  var outCome= `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return outCome
  }
  else{
    return`Sorry, we don't have a credit card on file for you.`
  }
   //var output = myTag`that ${ person } is a ${ age }`;
  
}
