var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let l = cart.length;
  
  if (l === 0) {
    return 'Your shopping cart is empty.';
  }
  
  var sentPieces = [];
  for (let i = 0; i < l; i++) {
    if (l > 1 && i === l - 1) {
      sentPieces.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
    } else {
      sentPieces.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
  }
  
  if (l === 1) {
    return `In your cart, you have ${sentPieces}.`;
  } else {
    return `In your cart, you have ` + sentPieces.join(', ');
    }
}

function total() {
  var total = 0;
  for (let i = 0, l = cart.length; i < l; i++) {
    total += cart[i].itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i, 1);
    }
  }
  
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else { 
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
