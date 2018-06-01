var cart = [];

function getCart(item) {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemNPrice = {
    'itemName': item,
    'itemPrice': Math.floor(Math.random() * 100) + 1
  }
  cart.push(itemNPrice);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var priceNItem = [];
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  for (var i = 0; i < cart.length; i++) {
    var itemNPriceObj = cart[i];
    if (itemNPriceObj !== cart[cart.length - 1]) {
      priceNItem.push(`${itemNPriceObj.itemName} at $${itemNPriceObj.itemPrice}`);
    } else {
      priceNItem.push(`and ${itemNPriceObj.itemName} at $${itemNPriceObj.itemPrice}`);
    }
  }
  if (cart.length === 1) {
    return `In your cart, you have ${itemNPriceObj.itemName} at $${itemNPriceObj.itemPrice}.`;
  }
  return "In your cart, you have " + priceNItem.join(', ') + '.';
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    var itemNPriceObj = cart[i];
    sum += itemNPriceObj.itemPrice
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var itemNPriceObj = cart[i];
    if (itemNPriceObj.itemName === item) {
      cart.splice(i,1)
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var newTotal = Object.assign({}, {'total': total()})
    cart = [];
    return `Your total cost is $${newTotal.total}, which will be charged to the card ${cardNumber}.`
  }
}