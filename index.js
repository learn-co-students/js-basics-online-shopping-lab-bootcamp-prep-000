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
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  }


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
