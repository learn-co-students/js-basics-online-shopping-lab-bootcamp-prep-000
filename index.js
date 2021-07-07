var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
var itemPrice = Math.floor(Math.random() * 100 + 1);
var item = { itemName: itemName, itemPrice: itemPrice };
cart.push(item);
return `${itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  
  var cartEverything = "In your cart, you have";
  for (var i = 0; i < cart.length; i++) {
    
    var item = cart[i];
    cartEverything += ` ${item.itemName} at $${item.itemPrice}`;
    
    if (i < cart.length - 2) {
      cartEverything += ",";
    } else if (i === cart.length - 2) {
      cartEverything += ", and";
    }
    
  }
  return cartEverything + '.';
}

function total() {
  var runningTotal = 0;
  for (var i = 0; i < cart.length; i++) {
    runningTotal += cart[i].itemPrice;
  }
  return runningTotal;
}

function removeFromCart(itemName) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === itemName) {
      return cart.splice(i, 1);
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
if (cardNumber > 0) {
  var orderTotal = total();
  setCart([]);
  return `Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`
}
return "Sorry, we don't have a credit card on file for you.";
}
