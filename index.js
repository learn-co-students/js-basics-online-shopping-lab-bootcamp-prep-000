var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  var price = Math.floor(Math.random() * Math.floor(100) + 1);
  Object.assign (newItem, {itemName: item}, {itemPrice: price});
  cart.push(newItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart === undefined || cart.length == 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length == 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
  else if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else if (cart.length >= 3) {
    var viewedcart = [];
    for (var i = 0; i < cart.length; i++) {
      if (i !== cart.length - 1) {
      viewedcart.push(`${cart[i].itemName} at $${cart[i].itemPrice},`)
      }
      else {
        viewedcart.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      }
    }
  }
  return `In your cart, you have ${viewedcart.join(" ")}`
  }

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
    }
return totalPrice
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (`${item}` === cart[i].itemName) {
      cart.splice(i, 1,)
    }
    }
    if (cart.includes(`${item}`) === false) {
      return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === "undefined") {
  return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var totalCost = 0
    for (var i = 0; i < cart.length; i++) {
      totalCost += cart[i].itemPrice
    }
  }
  while (cart.length != 0) {
    cart.shift()
  }
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
