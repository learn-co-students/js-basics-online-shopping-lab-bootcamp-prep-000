var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemPrices =  Math.random() * (100 - 1) + 1;
var itemPrice = Math.floor(itemPrices)
var itemName = item
var cartMessage = `${itemName} has been added to your cart.`;
cart.push({itemName: itemName, itemPrice: itemPrice})
 return cartMessage;
}

function viewCart() {
  if (cart.length === 1){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } if (cart.length > 0){
 var message = "In your cart, you have " 
   for (let i = 0; i < cart.length; i++){
     if (i !== cart.length - 1){ 
     message += `${cart[i].itemName} at $${cart[i].itemPrice}, `
     } else {
       message += `and ${cart[i].itemName} at $${cart[i].itemPrice}.` 
     }
   }
   return message
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
 let sum = 0
 for (let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice
}
return sum
}



function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
       cart.splice(i, 1)
       return cart
    } 
  } return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  if (cardNumber !== undefined){
var number = total() 
cart.length = 0;
    return `Your total cost is $${number}, which will be charged to the card ${cardNumber}.`
    
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
