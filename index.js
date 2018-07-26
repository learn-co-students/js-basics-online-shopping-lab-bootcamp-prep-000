var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = {}
  newObject["itemName"] = item; 
  newObject["itemPrice"] = Math.floor(Math.random() * 100);
  cart.push(newObject); 
  return `${item} has been added to your cart.`; 
}

function viewCart() {
  var current = 'In your cart, you have ';
  if (cart.length === 0) {
   return "Your shopping cart is empty." 
  } 
  if (cart.length >= 1) {
    current = current + `${cart[0].itemName} at $${cart[0].itemPrice}`
  } 
  if (cart.length >= 2) {
    for (var i = 1; i < cart.length - 1; i++) {
    current = current + `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    } 
    current = current + `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`;
  }
   return current + "."; 
}


function total() {
  var priceTotal = 0
  for (var i = 0; i < cart.length; i++) {
    priceTotal = priceTotal + cart[i].itemPrice; 
  } return priceTotal; 
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item){
      return cart.splice(i, 1); 
    } 
  } return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var totalPrice = total(); 
 if (cardNumber === undefined) {
   return "Sorry, we don't have a credit card on file for you."
 } else {
   cart = []; 
   return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`; 
 }
}
