var cart = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemObject = {itemName: item, itemPrice: getRandomInt(1,100)};
 cart.push(itemObject);
 return(`${item} has been added to your cart.`);
}

function viewCart() {
  var shoppingCart = [];
  var string = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++) {
    shoppingCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  
  if (shoppingCart.length === 0) {
    return('Your shopping cart is empty.');
  } else if (shoppingCart.length === 1) {
    return(`${string} ${shoppingCart}.`);
  } else if(shoppingCart.length === 2) {
    return(`${string} ${shoppingCart[0]}, and ${shoppingCart[1]}.`);
  } else {
    return(`${string} ${shoppingCart[0]}, ${shoppingCart[1]}, and ${shoppingCart[2]}.`);
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
  for (var i = 1; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return(cart);
    }
  }
  return('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  var totalPrice = total();
  if (! cardNumber) {
    return("Sorry, we don't have a credit card on file for you.");
  } else {
    cart.length = 0;
    return(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
  }
}
