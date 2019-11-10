var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // Create object of item, set price to a random number between 1 and 100. 
 let newItem = { itemName: [item], itemPrice: Math.floor((Math.random() * 100) + 1)}; 
 cart.push(newItem); 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // No period at the end of the initial empty cart status as this is added after the for loop, whether or not it runs. 
  let cartStatus = (cart.length < 1 ? "Your shopping cart is empty" : `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`);
  // If cart is empty, it will skip the for loop entirely. 
  for (let i = 1; i < cart.length; i++) {
    cartStatus += (i < cart.length - 1 ?  ", " : ", and "); 
    cartStatus += `${cart[i].itemName} at $${cart[i].itemPrice}`;
  }
  cartStatus += "."; 
  return cartStatus; 
}

function total() {
  let totalValue = 0;
  for (let i = 0; i < cart.length; i++) {
    totalValue += cart[i].itemPrice; 
  }
  return totalValue; 
}

function removeFromCart(item) { 
  for (let i = 0; i < cart.length; i++) {
    // === doesn't work here (it checks type as well as value, == only checks value and does type conversion automatically)
    if (cart[i].itemName == item) {
      // Found item - remove and return cart. 
      cart.splice(i, 1); 
      return cart;
    }
  }
  // If no matching item is found in cart. 
  return "That item is not in your cart."; 
}

function placeOrder(cardNumber) {
  let totalCost = total();
    // === doesn't work here (it checks type as well as value, == only checks value and does type conversion automatically)
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you."; 
  } else {
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`; 
  }
}
