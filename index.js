var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1}); 
  return `${item} has been added to your cart.`;
}


function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
  sum += cart[i].itemPrice;
  }
  return sum;
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item == cart[i].itemName) {
    cart.splice(i,1);
    return cart;
    }
  }
    return `That item is not in your cart.`;
}


function placeOrder(cardNumber) {
  var cartTotal = total()
  if (cardNumber) {
    cart.length = 0;
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  }
  else 
  return `Sorry, we don't have a credit card on file for you.`
}

function viewCart() {
  var message = 'In your cart, you have ';
  if (cart.length === 0) {
  return 'Your shopping cart is empty.';
  } else if (cart.length == 1) {
  return `${message}` + `${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } 
  else
    for (var i = 0; i < cart.length; i++) 
    {
      if (i === cart.length - 1) {
      message += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;   
    } else {
      message += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
  }
}
return message;
}