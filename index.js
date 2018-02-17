var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor(Math.random() * 101)}); 
 console.log(`${item} has been added to your cart.`);
 return (cart);
}

function viewCart() {
 if (cart.length === 0){
 console.log("Your shopping cart is empty.")
 } else if (cart.length === 1){
 console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
 } else if (cart.length === 2){
 console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
 } else {
  var returnString = "In your cart, you have "
 for (let n=0; n<cart.length; n++) {
 if (n<cart.length-1){
 returnString += `${Object.keys(cart[n])} at $${cart[n][Object.keys(cart[n])]}, `
  } else {
 returnString += `and ${Object.keys(cart[n])} at $${cart[n][Object.keys(cart[n])]}.`}} console.log(returnString)}		  
}
 
function total() {
 var totalPrice = 0
 if (cart.length === 0){
 return totalPrice
 } else {
 for (let n=0; n<cart.length; n++) {
 totalPrice += cart[n][Object.keys(cart[n])]
 }return totalPrice}}
 
 function removeFromCart(item) {
   for(let i = 0; i < cart.length; i++)
   if (cart[i].hasOwnProperty(item)) {cart.splice(i, 1); 
   return cart}
   console.log("That item is not in your cart."); return cart}
 

function placeOrder(cardNumber) {
  if (cardNumber) console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
 cart = []
if (cardNumber === undefined) 
{console.log ("Sorry, we don't have a credit card on file for you.")}}

