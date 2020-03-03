var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartObject = {};
  cartObject.itemName = item;
  cartObject.itemPrice = Math.floor(Math.random() * 100);
  cart.push(cartObject);
  var message = `${item} has been added to your cart.`;
  return message;
}

function viewCart() {
  var cartLength = cart.length;
  var message = "In your cart, you have ";
  if (cartLength === 0) {
    return "Your shopping cart is empty.";
  } else if (cartLength === 1) {
    message += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return message;
  } else if (cartLength === 2) {
    for (var i = 0; i < cartLength; i++) {
      if (i === cartLength - 1) {
        message += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else {
        message += `${cart[i].itemName} at $${cart[i].itemPrice} `;
      }
    }
    return message;
  } else {
    for (var i = 0; i < cartLength; i++) {
      if (i === cartLength - 1) {
        message += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
      } else if (i === cartLength - 2) {
        message += `${cart[i].itemName} at $${cart[i].itemPrice} `;
      } else {
        message += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
    return message;
  }
}

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var removedItem = [];
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      var deletedItem = cart.splice(i, 1);
      removedItem.push(deletedItem);
    }
  }
  
  if (removedItem.length === 0) {
    return "That item is not in your cart.";
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total();
    cart.splice(0);
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
