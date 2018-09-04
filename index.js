var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


//Use that passed-in string to create a new object representing the item
function addToCart(item) {
let price = Math.floor(Math.random()*100);
let newItem = {itemName: item, itemPrice: price};
cart.push(newItem);
return `${item} has been added to your cart.`
} 


function viewCart() {
  var cartContents = [];
  var inYourCart = "In your cart, you have "
  
  if (cart.length===0) {
    return `Your shopping cart is empty.`
  }
  
  if (cart.length===1) {
   cartContents.push(`${cart[0].itemName} at $${cart[0].itemPrice}.`)
   return inYourCart+cartContents;
  }
  
  if (cart.length===2) {
   cartContents.push(`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
   return inYourCart+cartContents;
  }
  
  
 if (cart.length>2) {
   cartContents.push(`${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`)
   return inYourCart+cartContents;
  }
  
  
  
 
  
}

function total() {
  let totalVal=0;
  for (let i=0;i<cart.length;i++){
    totalVal+=cart[i].itemPrice;
  }
  return totalVal;
}

function removeFromCart(item) {
  //use for loop to check array for item, and if found remove from array
  for(var i = 0; i < cart.length; i++){
    if(item === cart[i].itemName){
      return cart.splice(i,1)
    }
    }
    //if not found,
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
if (cardNumber===undefined) {
  return "Sorry, we don't have a credit card on file for you."
}
else {
  let finalTotal = total();
  cart = [];
  return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`;
  
}
}
