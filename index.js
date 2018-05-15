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
  var obj = {}
  obj.itemName = item
  obj.itemPrice = price
  cart.push(obj)
 return `${item} has been added to your cart.`
}
var cartItems = [];
function viewCart() {
  if (cart.length === 1) {
    var values = Object.values(cart[0])
    var end = `${values[0]} at $${values[1]}`
    return `In your cart, you have ${end}.`
  } else if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else {
    var string = "In your cart, you have"
    for (let i = 0; i < cart.length-1; i++) {
      string+=` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    return string+=` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
}
function total() {
  var all = 0
  for (let i = 0; i < cart.length; i++) {
    all = parseInt(all,10) + cart[i].itemPrice
  }
  return all
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
  var all = total()
  cart = []
  return `Your total cost is $${all}, which will be charged to the card ${cardNumber}.`
  }
}
