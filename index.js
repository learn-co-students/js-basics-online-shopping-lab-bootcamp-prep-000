var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var inside = {};
 inside.itemName = item;
 inside.itemPrice = Math.floor((Math.random()*100)+1);
 cart.push(inside);
 return `${item} has been added to your cart.`;
}

function viewCart() {
var count = 0;
for (var i = 0; i < cart.length; i++) {
  count++;
}
console.log(count);
  if (count === 0) {
  return "Your shopping cart is empty.";
  }
  else if (count === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  }
  else if (count === 2) {
    return  `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
  }
  else if (count === 3) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`
  }
}

function total() {
  var count = 0;
  for (var i = 0; i < cart.length; i++) {
    count += getCart()[i].itemPrice;
  }
  return count;
}

function removeFromCart(item) {
   var n ; 
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].itemName === item ) {
        n = cart.splice(i,1);
      }
     }
     if (n) {
       return cart;
     }
     else {
       return "That item is not in your cart.";
     }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
   return "Sorry, we don't have a credit card on file for you."
   }
  else { 
   var t = total();
   setCart([]);
   
   return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`;
    
  }
  
}