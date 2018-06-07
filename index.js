var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100+1);
    cart.push({ [item]: price});
    return `${item} has been added to your cart.`;
}

function viewCart() {
  var message = 'In your cart, you have';
  var itemsPrices = [];
  for (var i=0; i<cart.length; i++) {
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
    itemsPrices.push(`${item} at $${price}`);
  }
  var twoItems = itemsPrices.join(' and ');
  var startingItems = itemsPrices.slice(0,-1).join(', ');
  var endingItem = itemsPrices.slice(-1);
  if(cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  else if(cart.length === 1) {
    return `${message} ${itemsPrices}.`;
  }
  else if(cart.length === 2) {
    return `${message} ${twoItems}.`;
  }
  else {
    return `${message} ${startingItems}, and ${endingItem}.`;
  }
}

function total() {
  var totalPrice = 0;
  for (var i=0; i<cart.length; i++) {
    totalPrice = totalPrice + cart[i][Object.keys(cart[i])];
  }
  return totalPrice;
}

function removeFromCart(item) {
  for (var i=0; i<cart.length; i++) {
    if (Object.keys(cart[i]) == item) {
      cart.splice(i,1);
      return cart;
    }
    else {
      return 'That item is not in your cart.';
    }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
   return "Sorry, we don't have a credit card on file for you.";
 }
 else {
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
   cart = [];
   return;
 }
}
