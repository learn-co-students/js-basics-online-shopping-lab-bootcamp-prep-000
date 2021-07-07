var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
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
function getCart(){
  return cart;
}
function addToCart(item){
  var price = Math.floor(Math.random()*100)+0;
  var itemObject = {[item]:price};
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}
function removeFromCart(item){
  var cartLength = cart.length;
  for (var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
    }
  }
  var newCartLength = cart.length;
  if (cartLength === newCartLength) {
    console.log("That item is not in your cart.")
  }
}
function placeOrder(cardNumber){
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    var totalBill = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    console.log(totalBill);
  }
}
function viewCart(){
  var cartItems = [];
  if(cart.length > 0){
  for (let i = 0; i < cart.length; i++){
    var cartObject = cart[i];
    var cartItem = Object.keys(cartObject);
    var cartItemCost = cartObject[cartItem];
    var cartItemTotal = " " + cartItem + " at $" + cartItemCost
    if(i < (cart.length - 1)){
      cartItems.push(cartItemTotal);
    }
    else{
      cartItems.push(cartItemTotal + ".");
    }
  }
  console.log("In your cart, you have" + cartItems)
  }
  else{
    console.log("Your shopping cart is empty.");
  }
}
