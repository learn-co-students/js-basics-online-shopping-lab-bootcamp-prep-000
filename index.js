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
    "itemName":item,
    "itemPrice": Math.floor(Math.random() * 100 + 1)
  }
  cart.push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var items = [];
    for (var i = 0; i < cart.length; i++) {
      items.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
  }
  
  if (cart.length === 1) {
    return `In your cart, you have ${items}.`;
  } else {
    var lastItem = items.pop();
    var itemList = items.join(', ') + `, and ${lastItem}`;
    return `In your cart, you have ${itemList}.`
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var cost = total();
    cart = [];
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
