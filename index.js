var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var item_object={};
var itemprice = Math.floor(Math.random()*(100))
item_object[item]=itemprice
cart.push(item_object)
 
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  var items = [];
if (cart.length === 0){
  console.log("Your shopping cart is empty.")
}

for (let i = 0; i < cart.length; i++) {
var itemNames = Object.keys(cart[i]);
var itemName = itemNames[0];
var itemPrice = cart[i][itemName]

items.push(`${itemName} at $${itemPrice}`)
}

if (items.length === 1) {
console.log(`In your cart, you have ${items.join()}.`)
} else if (items.length === 2) {
console.log(`In your cart, you have ${items[0]} and ${items.slice(-1)}.`)
} else {
console.log(`In your cart, you have ${items.slice(0,-1).join(', ')}, and ${items.slice(-1)}.`)
}
}

function total() {
let totalamount = 0
for (var i = 0; i < cart.length; i++){
  for (var item in cart[i]){
    totalamount += cart[i][item]
  }
}
return totalamount
}

function removeFromCart(item) {
  var itemincart = false
  for (var i = 0; i < cart.length; i++){
  if (cart[i].hasOwnProperty(item)){
    itemincart=true;
    cart.splice(i, 1);
  }
  }
  if (itemincart === false){
    console.log("That item is not in your cart.")
  }
return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
