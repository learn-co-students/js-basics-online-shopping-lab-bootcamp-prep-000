var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 101) + 1;
  var newItem = { [item]:itemPrice };
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
var currentCart = [];

//var itemPrices = cart.values();
if (cart.length === 0) {
  return console.log('Your shopping cart is empty.');
}

if (cart.length>0) {
  for (let i = 0; i < cart.length; i++){
    var itemNames = Object.keys(cart[i]);
    var price = cart[i][itemNames[0]]
      currentCart.push(`${itemNames} at $${price}`)
    }
  } //for loop final bracket
var finalStatement = '';
  switch (cart.length) {

    case 1:
    finalStatement = currentCart.join();
    break;

    case 2:

    finalStatement = currentCart.join(' and ');
    break;

    default:
    var x = currentCart.length-2;
    var y = currentCart.length-1;

    currentCart[y] = `and ${currentCart[y]}`;
    finalStatement = currentCart.join(', ');
  }
  console.log(`In your cart, you have ${finalStatement}.`);
} //if statement final bracket



function total() {
  var sum = 0;
    for (let i = 0; i < cart.length; i++){
      var itemNames = Object.keys(cart[i]);
      var price = cart[i][itemNames[0]]
      sum += price;
    }
    return sum;
}

function removeFromCart(item) {
var i;
for (i = 0; i < cart.length; i++){

  debugger
if (cart[i].hasOwnProperty(item) == true) {
  cart.splice(i, 1);
  return cart;

}
else {
  console.log("That item is not in your cart.");
  return cart;
}
}
}

function placeOrder(cardNumber) {
  // write your code here
}
