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
  var obj = { 
    itemName: item, 
    itemPrice: price 
    }
  cart.push(obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cart = getCart();
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var result = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
  for(var i = 1; i < cart.length; i++) {
    result = result + ", "
    if(i === cart.length - 1) {
    result = result + "and "
    }
    result = result + `${cart[i].itemName} at $${cart[i].itemPrice}`
  }
  result = result + ".";
  return result 
}

function total() {
  var value = 0;
  var cart = getCart();
  for(var i = 0; i < cart.length; i++) {
    value += cart[i].itemPrice;
  }
  return value
}


function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var totalCost = total()
  cart.splice(0, cart.length);
  return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
}
