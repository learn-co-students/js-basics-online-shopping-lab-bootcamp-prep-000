var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: `${item}`, itemPrice: Math.floor((Math.random()*100) + 1)}
  cart.push(newItem);
  return newItem.itemName + " has been added to your cart.";
}

function viewCart() {
  if(cart.length === 0){return 'Your shopping cart is empty.'}
  else if(cart.length === 1){return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`}
  else if(cart.length === 2){return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`}
  else{
    var cartDescription = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      cartDescription = cartDescription + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return cartDescription + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}
function total(){
var total = 0;
for(var i = 0; i < cart.length; i++){
  total += cart[i].itemPrice;
}
return total;
}

function removeFromCart(item) {
 for (var i = 0; i < cart.length; i++){
if (item === cart[i].itemName){
   cart.splice(i, 1);
   return cart
 }
 }
 if(item != item[i].itemName){
   return "That item is not in your cart."
 }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalCost = total()
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }

}
