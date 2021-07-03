var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100);
 var itemobject = {itemName: `${item}`, itemPrice: price};
 cart.push(itemobject);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var statement;
  if (cart.length === 0) {
    statement = "Your shopping cart is empty.";
  } else {
    statement = "In your cart, you have ";
    for (var i in cart) {
      statement += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      if (i < cart.length - 1) {
        statement += `, `;
      }
      if (parseInt(i) === cart.length - 2) {
        statement += "and ";
      }
    }
    statement += ".";
  }
  return statement;
}

function total() {
  var total = 0;
  for (var i in cart) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var found = false;
  for(var i in cart) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      found = true;
    }
  }
  if (found === false) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var amount = total();
    cart = [];
    return `Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`
  }
  else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}
