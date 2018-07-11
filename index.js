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
  for (var i = 0; i < cart.length; i++)
  /*
  var string=Object.values(cart[i])
  var product=string[0]
  var price=string[1] */
  
   if (cart.length === 1) {
     return `In your cart, you have ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}.`} 
   else if (cart.length===2){
       return `In your cart, you have ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}, and ${Object.values(cart[i + 1])[0]} at $${Object.values(cart[i + 1])[1]}.`}
   else if (cart.length >= 3) {
      return `In your cart, you have ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]}, ${Object.values(cart[i + 1])[0]} at $${Object.values(cart[i + 1])[1]}, and ${Object.values(cart[i + 2])[0]} at $${Object.values(cart[i + 2])[1]}.`}
   else {
     return "Your shopping cart is empty."}
  }
  
/*
function total() {
  // write your code here
  let i=0
  while (i < cart.length) {
  var price=price + Object.values(cart[i])[1]}
}
*/

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
