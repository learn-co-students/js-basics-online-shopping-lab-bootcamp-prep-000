var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addToCart(item) {
 // write your code here
  var itemObject = generateCartItem(item);
  getCart().push(itemObject)
  return item + " has been added to your cart."
   }
 
function viewCart() {
 var item = getCart()[0]
 var second = getCart()[1]
 var third = getCart()[2]
 if (getCart().length === 1) {
 return `In your cart, you have ${item.itemName} at $${item.itemPrice}.`}
  else if (getCart().length === 0) {
     return "Your shopping cart is empty."}
  else if (getCart().length === 2) {
    return `In your cart, you have ${item.itemName} at $${item.itemPrice}, and ${second.itemName} at $${second.itemPrice}.`}
  else {
    return `In your cart, you have ${item.itemName} at $${item.itemPrice}, ${second.itemName} at $${second.itemPrice}, and ${third.itemName} at $${third.itemPrice}.`}
  }

function total() {
 var sum = 0
 for (let i = 0; i < getCart().length; i++) {
   var item = getCart()[i]
  sum = sum + item.itemPrice
 } 
return sum
  }

function removeFromCart(item) {
for (let i = 0; i < getCart().length; i++){
  if (getCart()[i].itemName === item){
    getCart().splice(i,1)
    return getCart()
  }
  }
  return "That item is not in your cart."
  }

function placeOrder(cardNumber) {
const cartTotal = total()
if (cardNumber > 0) {
cart.length = 0;
return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
}
return 'Sorry, we don\'t have a credit card on file for you.'
  }
