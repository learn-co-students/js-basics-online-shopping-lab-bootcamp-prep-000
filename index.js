var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 });
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  var inCart = "";
  if (cart.length === 0) {
    inCart = "Your shopping cart is empty.";
  } else {
    inCart = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      if (i > 0) {
        inCart += ", ";
        if (i === cart.length - 1) {
          inCart += "and ";
        }
      }
      inCart += `${cart[i].itemName} at $${cart[i].itemPrice}`;
      if (i === cart.length - 1) {
        inCart += ".";
      }
    }
  }
  return inCart;
}

function total() {
  // write your code here
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var receipt = `Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`;
    cart.length = 0;
    return receipt;
  }
}