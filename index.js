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
//var cartItem = []
//var price = Math.floor(Math.random() * 100)
//if (cart.length === 0) {
//console.log ('Your shopping cart is empty.')
//}
//for (var i = 0; i < cart.length; i++)

var cart = getCart()
  if(cart.length === 0)
    return console.log("Your shopping cart is empty.")

  var itemprice_str = []
  for(var i = 0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0]
    itemprice_str.push(`${key} at $${cart[i][key]}`)
  }
  var msg = "In your cart, you have "
  if(cart.length === 1)
    msg += itemprice_str + "."
  else if(cart.length === 2){
    msg += itemprice_str.join(" and ") + "."
  }
  else if(cart.length > 2){
    itemprice_str[cart.length - 1 ]= "and ".concat(itemprice_str[cart.length - 1]).concat(".")
    msg += itemprice_str.join(", ")
  }
  return console.log(msg)

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
