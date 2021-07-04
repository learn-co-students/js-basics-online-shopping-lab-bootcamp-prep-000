var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newItem = {itemName: item, itemPrice: Math.floor(Math.random() * 101)};
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  const currentLine = [];
  
  for (let i = 0; i < cart.length; i++) {
    currentLine.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if (currentLine.length === 1) {
    return `In your cart, you have ${currentLine}.`;
  }
  return `In your cart, you have ${currentLine.slice(0, -1).join(", ")}, and ${currentLine[currentLine.length -1]}.`;
}

function total() {
  
let currentTotal = 0;

  for (let i = 0; i < cart.length; i++) {
    currentTotal += (cart[i].itemPrice);
  }
  return currentTotal;
}

function removeFromCart(itemRemove) {
  
  for (let i = 0; i < cart.length; i++) {
    if (itemRemove === cart[i].itemName) {
      cart.splice(i, 1);
      return getCart();
    }
  } return "That item is not in your cart.";
}
  

function placeOrder(cardNumber) {
  
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  
  let cost = total();
  
  cart = [];
  
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
}
