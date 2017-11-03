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
 console.log(`${item} has been added to your cart.`)
 var random = Math.floor(Math.random()*10) + 1
 var item = {[item]:random}
 cart.push(item)
 return cart
}

for (var i = 0; i < cart.length; i++){
  var itemNPrice = cart[i]
  var item = Object.keys(itemNPrice)[0]
  var price = itemNPrice[item]

function viewCart() {
  // write your code here
  if (cart.length === 0) {
  return console.log("Your shopping cart is empty.")
  }
  else {
    var itemNPrices = [];
    for (var i = 0; i < cart.length; i++) {
     var itemNPrice = cart[i]
     var item = Object.keys(itemNPrice)[0]
     var price = itemNPrice[item]
     itemNPrices.push(` ${item} at \$${price}`)
   }
   if (itemNPrices.length === 1) {
     return console.log(`In your cart, you have${itemNPrices}.`)
   }
   else if (itemNPrices.length === 2) {
     return console.log(`In your cart, you have${itemNPrices[0]} and${itemNPrices[1]}.`)
   }
   else {
     return console.log(`In your cart, you have${itemNPrices.slice(0,-1)}, and${itemNPrices.slice(-1)}.`)
   }
 }
 }

function total() {
  // write your code here
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++){
    var itemNPrice = cart[i]
    var item = Object.keys(itemNPrice)[0]
    var price = itemNPrice[item]
    totalPrice += price
  }
return totalPrice
}

function removeFromCart(item) {
  // write your code here
if () {

}
else {}

}

function placeOrder(cardNumber) {
  // write your code here
}
