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
var newItem = {itemName:[item], itemPrice:Math.floor(Math.random()*100)}
cart = [...cart,newItem];
return `${item} has been added to your cart.`
}
  

function viewCart() {
  // write your code here
 var itemsAtPrice = []
 for (var i = 0; i < cart.length; i++){
   itemsAtPrice.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
 }
 if (itemsAtPrice.length === 0){
   return "Your shopping cart is empty.";
 } else if (itemsAtPrice.length === 1) {
   return `In your cart, you have ${itemsAtPrice}.`;
 } else if (itemsAtPrice.length === 2) {
   return `In your cart, you have ${itemsAtPrice[0]}, and ${itemsAtPrice[1]}.`;
 } else {
   return `In your cart, you have ${itemsAtPrice.slice(0,itemsAtPrice.length-1).join(", ")}, and ${itemsAtPrice.slice(-1)}.`
 }
  
}

function total() {
  // write your code here
  var runningTotal = 0;
  for (var i = 0; i < cart.length; i ++){
    runningTotal += Number(cart[i].itemPrice);
  }
  return runningTotal;
}

function removeFromCart(item) {
  // write your code here
  var newCart = [];
  for (var i = 0; i < cart.length; i ++){
    var currentItem = cart[i].itemName;
    if (currentItem != item) {
      newCart = [...newCart,cart[i]];
    }
  }
  if (newCart.length === cart.length) {
    return "That item is not in your cart.";
  } else {
    cart = newCart;
  }
}


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var endTotal = total();
  cart.length = 0;
  return `Your total cost is $${endTotal}, which will be charged to the card ${cardNumber}.`;
  
}
