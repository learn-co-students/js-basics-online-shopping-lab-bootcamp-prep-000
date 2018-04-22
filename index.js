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
 var itemObject = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 }
 
 cart.push(itemObject);
 return `${itemObject.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var output = 'In your cart, you have '
  
  if (cart.length == 0) {
    return 'Your shopping cart is empty.';
  }
  
  if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  for (var i = 0; i < cart.length; i++) {
    if (i == cart.length - 1) {
      output = output + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
    else {
      output = output + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    }
  }
  
  return output;
}

function total() {
  // write your code here
  var total = 0;
  
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here
  
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1);
      return cart;
    }
  } 
  
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  var totalPrice = total();
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  if (cardNumber != null) {
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
