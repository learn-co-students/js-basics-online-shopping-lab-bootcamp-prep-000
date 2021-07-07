var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randNum = Math.round(Math.random() * 100);
  var newItem = {"itemName": item, "itemPrice": randNum};
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var statement = "In your cart, you have ";
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        statement += `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`
      } else if (i === cart.length - 1) {
        statement += `and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`
      } else {
        statement += `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, `
      }
    }
    return statement;
  }
}

function total() {
  var totalValue = 0;
  for (let i = 0; i < cart.length; i++) {
    totalValue += cart[i]["itemPrice"];
  }
  return totalValue;
}

function removeFromCart(item) {
  var startLength = cart.length;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i]["itemName"] === item) {
      cart.splice(i, 1);
    }
  }
  if (startLength === cart.length) {
    return "That item is not in your cart.";
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  var cartTotal = total();
  if (cardNumber > 0) {
      cart = [];
      return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`;
    } else {
      return "Sorry, we don\'t have a credit card on file for you.";
    }
}
