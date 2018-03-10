var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100 + 1)});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length > 0) {
    var report = "In your cart, you have";
    if (cart.length === 1) {
      report = `${report} ${cart[0].itemName} at $${cart[0].itemPrice}.`;
      return report;
    } else if (cart.length === 2) {
      report = `${report} ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      return report;
    } else {
      for (var i = 0; i < cart.length; i++) {
        if (i === cart.length - 1) {
          report = `${report.slice(0, -1)} and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
          return report;
        } else {
          report = `${report} ${cart[i].itemName} at $${cart[i].itemPrice},`;
        }
      }
    }
  } else return "Your shopping cart is empty.";
}

function total() {
  var totalVal = 0;
  for (var i = 0; i < cart.length; i++) {
    totalVal += cart[i].itemPrice;
  }
  return totalVal;
}

function removeFromCart(item) {
  var cartOrig = cart;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  if (cartOrig === cart) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === "undefined") {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var grandTotal = total();
    cart = [];
    return `Your total cost is $${grandTotal}, which will be charged to the card ${cardNumber}.`;
  }
}

