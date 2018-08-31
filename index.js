var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var itemObj = {itemName: item, itemPrice: price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var output = "In your cart, you have ";
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else if (cart.length === 1) {
    output += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return output;
  } else {
    for (var i = 0; i < cart.length; i++) {
      output += (i === cart.length - 1 ? "and " : "") + `${cart[i].itemName} at $${cart[i].itemPrice}` + (i === cart.length - 1 ? "." : ", ");
    }
    return output;
  }
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  var match = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      match = true;
      cart.splice(i, 1);
    }
  }
  if (!match) return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var cartMessage = "Your total cost is $" + total() + `, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return cartMessage;
  }
}
