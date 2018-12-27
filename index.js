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
 // We generate the price of each item with the help of the 
 // Math.floor() and Math.random() functions.
 var price = Math.floor(Math.random() * 100);
 const new_item = {
   itemName: item,
   itemPrice: price
 }
 // Push the created object into our array.
 cart.push(new_item);
 // Alert the user, their item has been added.
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var cartContent = `In your cart, you have `;
  var i = 0;
  // If our cart is empty we simply return this
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if (cart.length === 1) { // We are at the end of the array.
    cartContent += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
    return cartContent;
  }
  while(i < cart.length) {
    if ((i+1) === cart.length) { // We are at the end of the array.
      cartContent += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      break;
    }
    // If we are at the end of the array we do this and break.
    cartContent += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    i++;
  }
  return cartContent;
}

function total() {
  // write your code here
  // We iterate through the cart to sum all the prices of items.
  var i = 0;
  var totalCost = 0;
  while(i < cart.length) {
    totalCost += cart[i].itemPrice;
    i++;
  }
  return totalCost;
}

function removeFromCart(item) {
  // write your code here;
  var found = false;
  for(var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) { // Item is found on the cart.
        //console.log(`found it ${cart[i].itemName}.`);
        cart.splice(i, 1);
        found = true;
        break; 
    } 
    found = false;
  }
  if (found) {
    return cart;
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber = 0) {
  // write your code here
  if (cardNumber === 0) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  // Get the total cost of items on our cart.
  var totalCost = total();
  // Empty the cart.
  for(var i = 0; i < cart.length; i++) {
    cart.pop();
  }
  // Return 
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
}
