var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 101)
    var cartItem = Object.assign({}, {[item]:itemPrice})
    cart.push(cartItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

// cart = [{pear: 30}]
function viewCart(){
if (cart.length === 0) {console.log("Your shopping cart is empty.") }
else if ( cart.length === 1) {
  var itemName = Object.keys(cart[0])
  var itemPrice = cart[0][itemName]
  console.log (`In your cart, you have ${itemName} at $${itemPrice}.`)
  }
  else if (cart.length === 2) {
    var itemName = Object.keys(cart[1])
    var itemPrice = cart[1][itemName]
    console.log (`In your cart, you have ${itemName[0]} at ${itemPrice[0]} and ${itemName[1]} at $${itemPrice[1]}.`)
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
