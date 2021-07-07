console.log("sup")
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var object = {itemName: item, itemPrice: Math.floor(Math.random()*100 + 1)}
 cart.push(object)
 return (`${item} has been added to your cart.`)
}

function viewCart() {
 var object = {itemName: item, itemPrice: Math.floor(Math.random()*100 + 1)}
 if (cart.length === 0) {
   return ("Your shopping cart is empty.")
 }
 else {
   var x = ""
    for (var i = 0; i < cart.length; i++) {
      x = x + cart[i] + "at" + object[itemPrice] + ","
    }
    return ("In your cart, you have " + x)  
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
