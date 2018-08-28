var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = { itemName: item, itemPrice: Math.ceil(Math.random()*100) };
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    var array = [];
    for (var i = 1; i < cart.length - 1; i++) {
      array.push(cart[i].itemName + " at $" + cart[i].itemPrice + ", " );
    }
    var stringArray = array.toString();
    return "In your cart, you have " + cart[0].itemName + " at $" + cart[0].itemPrice + ", " + stringArray + "and " + cart[cart.length - 1].itemName + " at $" + cart[cart.length - 1].itemPrice + ".";
  }
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      return cart.splice(i, 1);
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (!Number.isInteger(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var finalTotal = total();
    setCart([]);
    return `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`;
  }
}