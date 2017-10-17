var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  var elem = {[item]:itemPrice}
  cart.push(elem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length){
    console.log("Your shopping cart is empty.")
  }

  const itemsInCart = []
  const pricesInCart = []

  for (let i = 0, l = cart.length; i < l; i++) {
    itemsInCart.push(`${cart[i]}`)
  //  pricesInCart.push(`${itemsInCart[i]}`)
  }

  return `In your cart, you have ${itemsInCart.join(', ')}.`
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
