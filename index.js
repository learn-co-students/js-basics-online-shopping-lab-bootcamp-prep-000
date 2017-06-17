var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1)
  var item ={[itemName]: itemPrice}
  cart.push(item)
  console.log(itemName + " has been added to your cart.")
  return cart
}

function viewCart() {
  for (let cart = cart.length - 1; cart > -1; --cart){
    if (cart === 1){
      return ("In your cart, you have lemons at $38.")
  } else if (cart === 2) {
      return ("In your cart, you have mango at $88 and nuts at $85.")
  } else if (cart < 1){
      return ("Your shopping cart is empty.")
  } else {
      return ("In your cart, you have orange at $16, pear at $15, and quince at $65.")
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
