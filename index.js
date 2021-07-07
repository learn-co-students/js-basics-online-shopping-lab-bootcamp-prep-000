var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomPrice = Math.floor((Math.random() * 100) + 1);
  cart.push({itemName: item, itemPrice: randomPrice});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
  } else {
    for (let i = 2 ; i < cart.length ; i++) {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`
    }
  }
}

function total() {
  var sum = 0;
  for (let i = 0 ; i < cart.length ; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0 ; i < cart.length ; i++) {
    if (getCart()[i].itemName === item) {
      getCart().splice(i, 1);
      return getCart();
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}