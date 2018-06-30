var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
var itemAndPrice = {};
  
var price = Math.floor(Math.random()*100)+1
 itemAndPrice[item] = price;
  cart.push(itemAndPrice);
 
 console.log( "${item} has been added to your cart.")

return cart

}

function viewCart() {
  
if (cart.length === 0) {
return "Your shopping cart is empty."
 } else {
 var newArr = [];
for (var i = 0; i < cart.length; i++) {
 var price = Object.keys(cart[i]);
 for ( price in cart[i]) {
  newArr.push(`${Object.keys(cart[i])} at $${cart[i][price]}`)
 }
 }
 return console.log("In your cart, you have " + newArr.join(", ") + ".");
 }
 
}

function total() {
  
var totalCost = 0;

    for(var i = 0; i < cart.length; i++){
      for(var cost in cart[i]){
        totalCost += cart[i][cost];
      }
    }
    return totalCost;
}

function removeFromCart(item) {
  
   var itemInCart = false
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true;
      cart.splice(i, 1);
   }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.");
  }
  return cart
}

function placeOrder(cardNumber) {
  
  if (cardNumber.length===0){
console.log( "Sorry, we don\'t have a credit card on file for you.")
}
else
{
  
console.log("Your total cost is $${total()}, which will be charged to the card ${cardNumber}.")
 
 cart = []
 
setCart(cart)
  
}

}