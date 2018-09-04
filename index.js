var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var toAdd={
    'itemName':item,
    'itemPrice':Math.floor(Math.random()*100)}
cart.push(toAdd)
return`${item} has been added to your cart.`
}



function viewCart() {
if(cart.length===0){
return "Your shopping cart is empty."}

else if (cart.length===1){
 return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)}
 
else if (cart.length===2){
  return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)}
  
else if (cart.length>=3){
 let string=''
 for (let i=0;i<cart.length-1;i++)
  {
   string+=` ${cart[i].itemName} at $${cart[i].itemPrice},`}
   let stringTwo=(`and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`)
  return `In your cart, you have${string} ${stringTwo}`
}
  
}


function total() {
  let total=0
  for (let i=0; i<cart.length;i++){
    total+= cart[i].itemPrice
  }
  return total
}

function itemSearch(itemName){
  var search=''
  for(let i =0; i<getCart().length;i++){
    if (getCart()[i].itemName===itemName)
      search=getCart()[i]}
    return search
   } 
   
   function notifyUserThereIsNoItemToRemove() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove,1)
}

   
   
   function removeFromCart(itemName) {
  var itemToRemove = itemSearch(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notifyUserThereIsNoItemToRemove()
}
    
  
function placeOrder(cardNumber){
 if(!cardNumber){
   return 'Sorry, we don\'t have a credit card on file for you.'
 } 
 else{
   var sumCharge=total()
   cart=[]
   return `Your total cost is $${sumCharge}, which will be charged to the card ${cardNumber}.`
 }
}


  
