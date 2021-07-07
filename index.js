var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName: item, itemPrice: randomPrice(1, 100)});
  return `${item} has been added to your cart.`;
}

function randomPrice(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  var message = 'In your cart, you have ';
  for (let i = 0; i < cart.length; i++) {
    message += `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i === cart.length - 2) {
      message += ', and ';
    } else if (i < cart.length - 2) {
      message += ', '
    } else {
      message += '.';
    }
  }
  return message;
}


function total() {
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  }
  var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return message;
}

