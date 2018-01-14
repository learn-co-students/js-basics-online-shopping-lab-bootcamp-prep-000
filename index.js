var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice =  Math.floor(Math.random() * 100);
var obj = {};
Object.assign(obj, { [itemName]: itemPrice });
cart.push(obj);
console.log(`${itemName} has been added to your cart.`)
return cart;
}

function viewCart() {
  for(let i = 0; i < cart.length; i++) {
    var name = Object.keys(cart);
    var price = Object.values(cart);
    var item = console.log(`${name[i]} at ${price[i]}`)
    console.log("In your cart, you have " + item +".")
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
