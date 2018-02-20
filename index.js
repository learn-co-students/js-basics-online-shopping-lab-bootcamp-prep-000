var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100)
  var newitem = {[item] : itemPrice}
 cart.push(newitem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    var item = Object.keys(cart)
    var price = cart.item
    console.log(`In your cart, you have ${item} at $${price}.`)
  } else {
    return "test failed"
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    var itemPrice = parseInt(Object.values(cart[i]))
    sum += itemPrice
  }
  return sum
}
/*
function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (Object.hasOwnProperty(cart[i].item)) {
    cart.splice(i)
  } else {
    "That item is not in your cart"
  }
  return cart
  }
}
*/
function placeOrder(num) {
  if (isNaN(num)) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
   var text = `Your total cost is ${total()}, which will be charged to the card ${num}.`
   cart = []
   return text
  }
}