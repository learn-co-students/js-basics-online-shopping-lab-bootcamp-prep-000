var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var price = Math.floor((Math.random()* 100) + 1)
 var items = {itemName: itemName, itemPrice: price} 
 cart.push(items)
 return`${itemName} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var newitem = []
    var objectKey = Object.keys(cart[i])
    for (let i = 0; i< cart.length; i++) {
      newitem.push(`In your cart, you have " + Object.keys() 
      }
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
