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
 getCart().push({itemName: item, itemPrice: Math.floor(Math.random()*100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (getCart().length === 0) {
    return "Your shopping cart is empty."
  }
  
  var output = []
  for (let i=0; i<getCart().length; i++) {
    getCart().push(`${getCart()[i]} at `)
  }
  return getCart().join('')
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
