var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = { itemName: `${item}`, itemPrice: Math.floor(Math.random() * Math.floor(100)) + 1 };
  cart.push(item);
  return `${item.itemName} has been added to your cart.`;
}

function viewCart() {
  var clist = []
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i ++) {
      clist.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
  }
  if (cart.length === 1) {
    return `In your cart, you have${clist}.`;
  } else if (cart.length > 1) {
    return `In your cart, you have${clist.slice(0, -1)}, and${clist.slice(-1)}.`;
  } else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  var message = "That item is not in your cart.";
  var i = 0
  while (i < cart.length) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1);
      message = cart;
    }
    ++i;
  }
  return message 
}

function placeOrder(cardNumber) {
  if (cardNumber > 1) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total = total + cart[i].itemPrice;
    }
    cart.splice(0);
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}