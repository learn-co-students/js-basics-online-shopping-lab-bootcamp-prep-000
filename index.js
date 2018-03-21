var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item_objects = {};
  var price = Math.floor(Math.random() * 100);

  item_objects.itemName = item;
  item_objects.itemPrice = price;

  cart.push(item_objects);
  return item + " has been added to your cart.";
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  var cartString = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++) {
    if (i === cart.length - 1 && cart.length !== 1) {
      cartString += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`;

    } else if (cart.length === 1) {
      cartString += ` ${cart[i].itemName} at $${cart[i].itemPrice}.`;

    } else {
      cartString += ` ${cart[i].itemName} at $${cart[i].itemPrice},`;
    }
  }
  return cartString;
}

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var itemIdx = undefined;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      itemIdx = i;
      break;
    }
  }

  if (itemIdx === undefined) {
    return 'That item is not in your cart.';

  } else {
    cart.splice(itemIdx, 1);}

  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined) {
    var orderStr = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return orderStr;

  } else {
  return 'Sorry, we don\'t have a credit card on file for you.'}
}
