var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var max = 100;
  var min = 1;
  var price = Math.floor(Math.random() * (max - min + 1)) + min;
  var itemObj = {
    itemName : item,
    itemPrice : price
  };

  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var itemStr = '';

  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    for (var i = 0; i < cart.length; i++) {
      var itemObj = cart[i];
      var itemName = itemObj.itemName;
      var itemPrice = itemObj.itemPrice;

      if (cart.length === 1) {
        itemStr += `${itemName} at $${itemPrice}.`;
      } else if (i === cart.length - 1) {
        itemStr += `and ${itemName} at $${itemPrice}.`;
      } else {
        itemStr += `${itemName} at $${itemPrice}, `;
      }
    }
  }

  return `In your cart, you have ${itemStr}`;
}

function total() {
  var totalPrice = null;

  for (var i = 0; i < cart.length; i++) {
    var itemObj = cart[i];

    totalPrice += itemObj.itemPrice;
  }

  return totalPrice;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var itemObj = cart[i];
    var itemInCart = itemObj.itemName;

    if (itemInCart === item) {
      cart.splice(i, 1);
      return cart;
    }
  }

  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don\'t have a credit card on file for you.`;
  } else {
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
