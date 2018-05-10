var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var items = {
  itemName: item,
  itemPrice: Math.floor(Math.random() * 100) + 1
 }
 cart.push(items);
 return `${items.itemName} has been added to your cart.`
}

function viewCart() {
  var message = "In your cart, you have"
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var itemNames = [];
  var itemPrices = [];
  for(var i=0; i < cart.length; i++) {
    itemNames.push(cart[i].itemName);
    itemPrices.push(cart[i].itemPrice);
  }
  if (itemNames.length == 1) {
    message += ` ${itemNames[0]} at $${itemPrices[0]}.`

  }
  else {
  for(var j=0; j < itemNames.length-1; j++) {
     message += ` ${itemNames[j]} at $${itemPrices[j]},`
  }
    message += ` and ${itemNames.pop()} at $${itemPrices.pop()}.`
  }
  return message;
}

function total() {
  var sum = 0;
  var itemPrices = [];
  for(var i=0; i < cart.length; i++) {
    itemPrices.push(cart[i].itemPrice);
  }
  for(var j=0; j< itemPrices.length; j++) {
    sum += itemPrices[j]
  }
  return sum;
}

function removeFromCart(item) {
  for(var i=0; i< cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
       return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var totalCharge = total()
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  cart = [];
  return `Your total cost is $${totalCharge}, which will be charged to the card ${cardNumber}.`
}

