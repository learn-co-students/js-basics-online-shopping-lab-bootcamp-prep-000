var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randomPrice = Math.floor(Math.random()*100);
 var newItem = {
   itemName: item,
   itemPrice: randomPrice
};
cart.push(newItem);
return newItem.itemName + ' has been added to your cart.';
}

function viewCart() {
  var viewCartMessage;
  var i = 0;
  var cartIndex = cart.length - 1;
  if (cart.length === 0) {
    viewCartMessage = 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
      viewCartMessage = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else {
  viewCartMessage = `In your cart, you have`;
  while (i < cartIndex) {
  viewCartMessage = viewCartMessage + ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
  i++; 
  }
  viewCartMessage = viewCartMessage + ` and ${cart[cartIndex].itemName} at $${cart[cartIndex].itemPrice}.`;
  }
  return viewCartMessage;
}

function total() {
  var i;
  var cartTotal = 0;
  for (i = 0; i < cart.length; i++)  {
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  var i;
  var newCart = [];
  for (i = 0; i < cart.length; i++)  {
  if (cart[i].itemName == item) {
    newCart = cart.splice(i, 1); 
  }
  }
  if (newCart == 0) {
  return 'That item is not in your cart.';
  } else {
  return newCart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else {
    var cartTotal = total();
    var i;
    for (i = 0; i < cart.length; i++) {
      cart.pop();
    }
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
