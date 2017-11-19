var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100)
  cart.push({[itemName]: itemPrice})
  console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  for(let i = 0; i < cart.length; i++)
  if(cart.length === 0){
    return "You shopping cart is empty."
  }
  if else(cart.length === 1){
    return `In your cart, you have ${cart.itemName[i]} at ${cart.itemPrice[i]}.`
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
