var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({[item]: Math.floor(Math.random() * 100)});
console.log(`${item} has been added to your cart.`)
return cart;

}

function viewCart() {
if (cart.length === 0){
  console.log("Your shopping cart is empty.")
} for (let i = 0; i < cart.length; i++){
  var list = [];
  list.push(cart[i])

}

return list
}




function total() {
var total = 0
for (let i = 0; i < cart.length; i++){
  total += `${cart.item[i]}`;
}
return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
