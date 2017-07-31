var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // Price is a random integer between 1 and 100
   var itemPrice = Math.floor((Math.random() * 99) + 1)
 // Use item string to create new object representing item. Should have one key-pair value, itemName: price
   var cart = new Object({})
 // As more items are added, the object should expand
   cart[item] = [itemPrice]
 // Upon successful addition, print ``<itemName> has been added to your cart.`
   console.log(`${item} has been added to your cart.`);
 // Return updated cart to console
   return cart
 }


function viewCart() {
  // write your code here
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
