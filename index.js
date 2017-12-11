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

//var cart = getCart()
  if(cart.length === 0) console.log("Your shopping cart is empty.")

  var itemPrice = []
  for(var i = 0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0]
    itemPrice.push(`${key} at $${cart[i][key]}`)
  }

  var msg = "In your cart, you have"
  if(cart.length === 1) {
    // msg += itemPrice + "."
    msg = `${msg} ${itemPrice}.`
  } else if(cart.length === 2){
    msg += itemPrice.join(" and ") + "."
  } else if(cart.length > 2) {
    itemPrice[cart.length - 1 ]= "and ".concat(itemPrice[cart.length - 1]).concat(".")
    msg += itemPrice.join(", ")
  }

  console.log(msg)
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
