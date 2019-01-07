var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*101);
 var cartAdder = {}
 cartAdder[item] = price;
 cart.push(cartAdder);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
 if (cart.length === 0){
   console.log("Your shopping cart is empty.");
 }
 if (cart.length !== 0) {
   var allKnowing = "In your cart, you have "
   for (var i = 0; i < cart.length; i++){
     if (i === cart.length-1 && cart.length > 1){
       if (cart.length === 2){
         allKnowing += " "
       }
       allKnowing += "and "
     }
     var cartObject = cart[i];
     var cartItem = Object.keys(cartObject);
     cartItem = cartItem[0];
     var cartCost = cartObject[cartItem];
     allKnowing += `${cartItem} at $${cartCost}`
     if (i === cart.length-1){
       allKnowing += ".";
     }
     if (cart.length > 2 && i < cart.length-1 && i !== cart.length-1){
       allKnowing += ", "
     }
   }
   console.log(allKnowing);
 }
}

function total() {
  var costCounter = 0
  for (var i = 0; i < cart.length; i++){
    var cartObject = cart[i];
    var cartItem = Object.keys(cartObject);
    cartItem = cartItem[0];
    var cartCost = cartObject[cartItem];
    costCounter += parseInt(cartCost,10);
  }
  return costCounter
}

function removeFromCart(item) {
var checkTrue = false;
for (var i = 0; i < cart.length; i++){
  var cartObject = cart[i];
// Cart Object Is the Object
  var cartItem = Object.keys(cartObject);
  // cartItem is the Key as an array
  cartItem = cartItem[0];
  // Convert cartItem to a String
  if (cartItem === item){
    cart.splice(i,1)
    checkTrue = true;
    return cart;
  }
}
if (checkTrue === false){
    console.log ("That item is not in your cart.");
}
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log ("Sorry, we don't have a credit card on file for you.");
  }
 else {
   var totalCost = total()
   console.log (`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
   cart = [];
 }
}
