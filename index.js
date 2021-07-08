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

function viewCart() {
  var itemsInCart = [];

  if (cart.length === 0) return 'Your shopping cart is empty.';

  for (var i = 0; i < cart.length; i++) {
    itemsInCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }

  if (itemsInCart.length > 1) {
    itemsInCart.push(`and ${itemsInCart.pop()}`);
  }

  return `In your cart, you have ${itemsInCart.join(', ')}.`;
}

function total() {
  var totalValue = 0;

  for (var i = 0; i < cart.length; i++) {
    totalValue += cart[i].itemPrice;
  }

  return totalValue;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var currentItem = cart[i].itemName;

    if (currentItem === item){
      cart.splice(i, 1);
      return cart;
    }
  }

  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (!cardNumber) return 'Sorry, we don\'t have a credit card on file for you.';

  var statement = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;

  cart = [];

  return statement;
}
