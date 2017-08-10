var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = (Math.floor(Math.random() * 100));
  var itemName = {[item]: itemPrice};
  cart.push(itemName);
  console.log ([item] + " has been added to your cart.");
  return cart;
}

function viewCart() {
 if (cart.length === 0){
  console.log ("Your shopping cart is empty.");
  }
  var cartObjects = [];
for (var i = 0; i < cart.length; i++){
  var itemsInCart = cart[i];
  var itemName = Object.keys(itemsInCart)[0];
  var itemPrice = itemsInCart[itemName];
  cartObjects.push(`${itemName} at ${itemPrice}`);
}
switch(cartObjects.length){
  case 1:
  break;
  case 2:
  cartObjects = cartObjects.join("and ")
  break;
  default:
  cartObjects[cart.length-1] = "and ".concat(cartObjects[cart.length-1]);
  cartObjects = cartObjects.join(", ");
}
console.log(`In your cart, you have ${cartObjects}.`);
}

function total() {

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}
