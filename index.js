var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({itemName: item, itemPrice: Math.random()*Math.floor(100)});
return `${item} has been added to your cart.`;
}

function viewCart() {
  var newString = 'In your cart, you have ';
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
 for (var i = 0; i < cart.length; i ++) {
   if (cart.length === 1) {
     return newString += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
   }
   if (i === cart.length-1) {
     newString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
   } else {
   newString += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
   }
}
return newString;
}
function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    totalValue = cart[i].itemPrice + totalValue;
}
return totalValue;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
       cart.splice(i,1);
       return cart;
  }
}
return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
  }
   if (cardNumber) {
     var newVariable = total();
     cart = [];
    return `Your total cost is $${newVariable}, which will be charged to the card ${cardNumber}.`;
  }
}