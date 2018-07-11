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
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100 + 1)})
 return `${item} has been added to your cart.`}


function viewCart() {
  // write your code here
   if (cart.length === 0) {
     return "Your shopping cart is empty."}
  
  for (var i = 0; i < cart.length; i++)
  /*
  var string=Object.values(cart[i])
  var product=string[0]
  var price=string[1] 
  why does the if statment ===0 not work when placed within for loop?*/
  
  if (cart.length === 1) {
     return `In your cart, you have ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}.`} 
   else if (cart.length===2){
       return `In your cart, you have ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}, and ${Object.values(cart[i + 1])[0]} at $${Object.values(cart[i + 1])[1]}.`}
   else {
      return `In your cart, you have ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}, ${Object.values(cart[i + 1])[0]} at $${Object.values(cart[i + 1])[1]}, and ${Object.values(cart[i + 2])[0]} at $${Object.values(cart[i + 2])[1]}.`}
  }
  

function total() {
  // write your code here
  var sum=0;
  for (var i=0; i < cart.length; ++i ) {
  sum += Object.values(cart[i])[1];
  }
  return sum;
}


function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
