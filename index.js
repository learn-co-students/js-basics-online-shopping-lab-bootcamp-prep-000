var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 }
 cart.push(newItem);
 return `${item} has been added to your cart.`
}

function viewCart() {
  var cartValue = ""
  if (cart.length > 0) {
    cartValue = "In your cart, you have "
    for (let i = 0; i < cart.length; i++) {
      if (cart.length === 1) {
        cartValue += `${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else if (i < cart.length - 1) {
        cartValue += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      } else {
        cartValue += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
    }
  } else {
    cartValue = "Your shopping cart is empty."
  }
  return cartValue
}

function total() {
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal
}

function removeFromCart(item) {
  var found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      found = true;
      cart.splice(i, 1);
    }
  }
  if (found) {
    return cart;
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
