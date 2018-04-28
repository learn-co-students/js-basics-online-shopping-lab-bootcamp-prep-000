var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = new Object({ itemName: item, itemPrice: 1+Math.floor(Math.random() * Math.floor(100))});
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var message = "In your cart, you have ";
  for ( var i = 0; i < cart.length; i++ ) {
    if ( i !== 0 ) {
      message = `${message}, `;
    }
    if ( i !== 0 && i === cart.length-1 ) {
      message = `${message}and `;
    }
    message = `${message}${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i == cart.length-1) {
      message = `${message}.`
    }
  }
  
  if ( cart.length == 0 ) {
    return "Your shopping cart is empty."
  } else {
    return message;
  }
}

function total() {
  var total = 0;
  for ( var i = 0; i < cart.length; i++ ) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for ( var i = 0; i < cart.length; i++ ) {
    if ( cart[i].itemName === item ) {
      cart.splice(i, 1);
      return cart;
    } 
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if ( cardNumber === undefined ) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var costTotal = total();
    cart = [];
    return `Your total cost is $${costTotal}, which will be charged to the card ${cardNumber}.`;
  }
}