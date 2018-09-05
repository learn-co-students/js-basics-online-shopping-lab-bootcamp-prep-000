var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getItemPrice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  var price = getItemPrice(1, 100);
  var newItem = {
    itemName : item,
    itemPrice : price
  };
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var emptyMessage = "Your shopping cart is empty.";
  var cartMessage = "In your cart, you have ";
  if (cart.length === 0) {
    return emptyMessage;
  } else if (cart.length === 1) {
    var name = cart[0].itemName;
    var price = cart[0].itemPrice;
    return `${cartMessage}${name} at $${price}.`;
    }
    else {
      for (var i = 0; i < cart.length - 1; i++) {
        var multiName = cart[i].itemName;
        var multiPrice = cart[i].itemPrice;
        cartMessage = cartMessage + `${multiName} at $${multiPrice}, `;
      }
      var lastItemName = cart[cart.length - 1].itemName;
      var lastItemPrice = cart[cart.length - 1].itemPrice;
      cartMessage = cartMessage + `and ${lastItemName} at $${lastItemPrice}.`;
      return cartMessage;
    }
}

function total() {
  var currentPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    var nextItemPrice = cart[i].itemPrice;
    currentPrice = currentPrice + nextItemPrice;
  }
  return currentPrice;
}

function removeFromCart(item) {
  var removed = false;
  for (var i = 0; i < cart.length; i++) {
    var searchItem = cart[i].itemName;
    if (searchItem === item) {
      cart.splice(i, 1);
      removed = true;
    }
  }
  if (removed === false) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total();
    cart =[];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
