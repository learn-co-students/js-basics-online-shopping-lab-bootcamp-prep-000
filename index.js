var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 100)
var newObject = {}
newObject[item] = price
cart.push(newObject)
console.log(`${item} has been added to your cart.`)
return cart
}
addToCart(eggs)


function viewCart() {
var cartItem = []
var price = Math.floor(Math.random() * 100)
if (cart.length === 0) {
  console.log ('Your shopping cart is empty.')
}
else { for (i = 0; i < cart.length; i++)
cartItem.push (`${cart[i]} at ${price}.`)}
console.log (`In you cart, you currently have ${cartItem}`)
}

viewCart()

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
