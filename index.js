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
    debugger
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
if cart.hasOwnProperty(item) = false {
  return "That item is not in your cart."
}
else {
  var index = cart.indexOf(item);
  array.splice(index, 1);
}
}

function placeOrder(cardNumber) {
  // write your code here
}
