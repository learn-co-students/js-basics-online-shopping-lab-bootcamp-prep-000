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
 var newItem = {}
 newItem[item] = Math.floor(Math.random() * (100 - 1) + 1)
 cart.push(newItem)
 
 console.log(`${item} has been added to your cart.`)
 
 return cart
}

function viewCart() {
  // write your code here
  var line = "In your cart, "
  if (cart.length > 2) {
    var rest = cart.join(',' + '.')
  } else if (cart.length === 2) {
    
  } else if (cart.length === 1) {
    var temp = cart[0]
    console.log(`${line} you have ${temp[0]} at $${temp[1]}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function total() {
  // write your code here
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    var temp = Object.key(cart)
    total += parseInt(temp)
  }
  
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
