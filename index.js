var cart = [];

function getCart(itemName) {
  return cart;
}


function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var itemDescribed = {};
  itemDescribed.itemName = item;
  var price = Math.floor(Math.random() * (100 - 1)) + 1;
  itemDescribed.itemPrice = price;
  cart.push(itemDescribed);
  return `${item} has been added to your cart.`;
}


function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } 
  var list = '';
  for (var i = 0; i < cart.length; i++) {
      if (list !== '') {
        list += ", ";
        if (i === cart.length - 1) {
          list += "and ";
        }
      }
      list += cart[i].itemName + " at $" + cart[i].itemPrice;
  }
  return "In your cart, you have " + list + ".";
}


function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}


function removeFromCart(item) {
  var foundIndex = -1;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
        foundIndex = i;
        break;
    }
  }

  if (foundIndex === -1) {
    return "That item is not in your cart.";
  } else {
    cart.splice(foundIndex, 1);
    return cart;
  }
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`; 
    cart.length = 0;
    return msg; 
  }
}
