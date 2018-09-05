var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {itemName: `${item}`, itemPrice: Math.floor(Math.random()*100)};
  getCart().push(obj);
  return `${obj.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  var sent = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
  for (var i = 1; i < cart.length; i++) {
    sent += ", ";
    if (i === cart.length-1) {
      sent += "and ";
    }
    sent += `${cart[i].itemName} at $${cart[i].itemPrice}`;
  }
    sent += ".";
    return sent;
}

function total() {
 var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  var totc = total();
  if (cardNumber === undefined) {
      return `Sorry, we don't have a credit card on file for you.`;
  }else {
    do {
        cart.shift();
    } while (cart.length > 0);
        return `Your total cost is $${totc}, which will be charged to the card ${cardNumber}.`;
  }
}