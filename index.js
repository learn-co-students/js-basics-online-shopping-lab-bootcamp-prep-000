var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = { 'itemName' : item, 'itemPrice' : Math.floor(Math.random() * 100) };
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var cartSummary = "In your cart, you have ";
    
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        cartSummary += `${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else if (i === cart.length - 1) { 
        cartSummary += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else {
        cartSummary += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return cartSummary;
  }
}

function total() {
  var sum = 0;
  
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;  
  }
  
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var grandTotal = total();
  cart = [];
  return `Your total cost is $${grandTotal}, which will be charged to the card ${cardNumber}.`;
}