var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {  
   itemName: item,
   itemPrice: (Math.random() * (100 - 1) + 1)
 };
 cart.push(newItem);
 return (`${newItem.itemName} has been added to your cart.`);
}

function viewCart() {
 //empty cart
 if(cart.length === 0) {
   return "Your shopping cart is empty.";
 }
 
 //one-item cart
 else if(cart.length === 1) {
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
 }
 
 //two-item cart
 else if(cart.length === 2){
   return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
 }
 
 //three-or-more-item cart
 else {
   var threeormore = "In your cart, you have ";
   var cartminusone = cart.length - 1;
   for (var i = 0; i < cartminusone; i++) {
     threeormore = threeormore + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
   }
   return threeormore + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`;
 }
}

function total() {
  var cartsum = 0;
  for (var i = 0; i < cart.length; i++) {
    cartsum += cart[i].itemPrice;
  }
  return cartsum;
}

function removeFromCart(item) {
  for (var i =0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var checkouttotal = total();
    cart = [];
    return `Your total cost is $${checkouttotal}, which will be charged to the card ${cardNumber}.`;
  }
}
