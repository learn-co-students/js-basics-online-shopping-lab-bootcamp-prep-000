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
 cart.push({itemName:item,itemPrice:Math.floor(Math.random()*100)}
 )
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let text=`In your cart, you have `
  let item=''
  if(cart.length > 0){
    if(cart.length ===1)
    {
       item +=`${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else 
  for(let i=0; i<cart.length;i++){
    if(i+1 === cart.length){
      item +=`and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }else{
      item +=`${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
      
  
    
  }
  return text + item;
  }else{
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
  let total=0;
  if(cart.length >0){
    for(let i=0; i<cart.length; i++){
      total +=cart[i].itemPrice;
    }
    return total
  }
}

function removeFromCart(item) {
  // write your code here
  let found=true;
  if(cart.length > 0){
    for(let i=0; i<cart.length; i++){
      if(cart[i].itemName === item){
        found=false;
        return cart.splice(i,1);
        
      } 
    }
    if(found){
      return 'That item is not in your cart.'
    }
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
  let cardTotal=total()
  if(cardNumber === null || cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    cart=[];
    return `Your total cost is $${cardTotal}, which will be charged to the card ${cardNumber}.`
  }
  
  
}
