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
 var itemPrice = Math.floor(Math.random() * 100)
 var newItem = {[item]: itemPrice}
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  // write your code here
   var text = "In your cart, you have"
  if (cart[0] === undefined) {
  console.log(`Your shopping cart is empty.`)}
  if (cart.length === 1) {
  console.log(`${text} ${Object.keys(cart[0])} at $${Object.values(cart[0])}.` )}
  if (cart.length === 2) {
  console.log(`${text} ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)}
  else for (let i = 0; i < cart.length; i++) {
    var sentence = []
    if (i === cart.length) {
      sentence.push(`and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`)}
    else {
      sentence.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}.`)
    console.log (`${text} ${sentence.join(', ')}`)}
  }
  
}

function total() {
  // write your code here
 
}

function removeFromCart(item) {
  // write your code here
 
}

function placeOrder(cardNumber) {
  // write your code here
 
 
}
