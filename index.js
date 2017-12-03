var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * (100-1))+ 1;//randomly generate integer from 1 to 100.
  cart.push({itemName: itemPrice}); // pushing the object to the cart
    console.log (`${itemName} has been added to your cart.`)
  return(cart);
}

function viewCart() {
  if (cart === 0){
    return "Your shopping cart is empty."
  }
  for (i = 0; i < cart.length; i++){
  console.log (`In your cart, you have ${itemName} at ${itemPrice}.`);
 }
}

var TotalValue = itemPrice;
var sum = 0;
function total () {
  for (i = 0; i < cart.length; i++){ //iterate through our itemPrice array
  sum += TotalValue[i];
 }
}
