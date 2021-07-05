var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price=Math.floor(Math.random()*100)
  var newCartItem={};
  newCartItem['itemName']=item;
  newCartItem['itemPrice']=price;
  cart.push(newCartItem)
  return `${item} has been added to your cart`
  
 // write your code here
 //newCartItem will add objects into the array
 // build the object and add it into the cart
 // push adds a new item to the existing cart
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
