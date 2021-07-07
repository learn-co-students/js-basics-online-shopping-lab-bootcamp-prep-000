var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = new Object({itemName: item, itemPrice: Math.floor((Math.random() * 100) + 1)});
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var theCart = []
  var greeting = "In your cart, you have "
  if (cart.length === 0){
  return "Your shopping cart is empty.";
  }
  else if (cart.length === 1) {
    greeting += (cart[0].itemName + " at $" + cart[0].itemPrice + ".");
    return greeting
  }
  else if (cart.length === 2) {
     greeting += (cart[0].itemName + " at $" + cart[0].itemPrice + ", and " + cart[1].itemName + " at $" + cart[1].itemPrice) + ".";
     return greeting
    }
  else {
    for (var i = 0; i < (cart.length - 1); i++){
     greeting += (cart[i].itemName + " at $" + cart[i].itemPrice + ", ");
    }
    greeting += ("and " + cart[cart.length - 1].itemName + " at $" + cart[cart.length - 1].itemPrice + ".");
    return greeting;
  }
}

function total() {
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
}

function removeFromCart(item) {
 for (var i = 0; i < (cart.length); i++){
   if (item === cart[i].itemName) {
     cart.splice(i, 1);
     return cart;
   }
}
return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var cartTotal = total();
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  } 
  else {
   cart.splice(0, cart.length);
   return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
}