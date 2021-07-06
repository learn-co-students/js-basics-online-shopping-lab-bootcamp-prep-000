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
  var itemObj = {itemName: item, itemPrice: price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}


function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  var string = [];
  for (var i = 0; i < cart.length; i++) {
    string.push(cart[i].itemName + " at $" + cart[i].itemPrice);
  }
  var statement = "In your cart, you have ";
  if (string.length === 1) {
    statement += string + ".";
  } else if (string.length === 2) {
    statement += (string[0] + ", and " + string[1] + ".");
  } else if (string.length > 2) {
    var lastElement = string.pop();
    var otherItem = string.join(", ");
    statement += (otherItem + ", and " + lastElement + ".");
  }
  return statement;
}

function total() {
  var price = 0;
  for (var i = 0; i < cart.length; i++) {
    price += cart[i].itemPrice;
  }
  return price;  
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) 
    if (cart[i].itemName === item) {
      cart = [...cart.slice(0, i), ...cart.slice(i + 1)];
      return cart;
    }
    return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  }
}
