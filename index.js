var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var addItem = new Object({ itemName: item, itemPrice: Math.floor(Math.random() * 101) });
  cart.push(addItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var message = "In your cart, you have ";
  message = `${message}`;
  switch(cart.length) {
    case 0:
      message = "Your shopping cart is empty.";
      break;
    case 1:
      message = `${message}${cart[0].itemName} at $${cart[0].itemPrice}.`;
      break;
    case 2:
      message = `${message}${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      break;
    case 3:
      message = `${message}${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`;
      break;
  }
  return message;
}

function total() {
 var total = 0;
 for ( var i = 0; i < cart.length; i++) {
   total += cart[i].itemPrice;
 }
 return total;
}

function removeFromCart(item) {
   for (var i = 0; i < cart.length; i++) {
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
  } else {
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}