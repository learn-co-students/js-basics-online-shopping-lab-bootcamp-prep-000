var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function addToCart(item) {
 var itemPrice = getRandomInt(100)
 cart.push({item: itemPrice})
 return `${} has been added to your cart.`
}

function viewCart() {
  // write your code here
  for(var i = 0; i < cart.length; i++) {
    if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    return `In your cart, you have ${cart}`
  }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  // item index number 
  cart.splice(0, item)
}

function placeOrder(cardNumber) {
  card.splice(0, cart.length - 0)
}
