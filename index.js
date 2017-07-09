var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function addToCart(item) {
var itemName = item
var itemPrice = getRandomIntInclusive(1,100)
var item = new Object();
item[itemName] = itemPrice;
cart.push(item)
console.log(`${itemName} has been added to your cart.`)
return cart
}

function viewCart() {
  if (getCart().length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (getCart().length === 1) {
    console.log(`In your cart, you have
      ${cart[0].itemName} at
      $${cart[0].itemPrice}.`)
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
