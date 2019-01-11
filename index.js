var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = new Object();
 newItem.itemName = item;
 newItem.itemPrice = 0;
 while (newItem.itemPrice === 0) {
   newItem.itemPrice = Math.floor(Math.random()*100);
 }
 cart.push(newItem);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var listOfItems = "In your cart, you have"
  var i = 0
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    while (i < cart.length-1) {
      listOfItems += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
      i++
    }
    listOfItems += ` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
  return listOfItems;
}


function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var currentLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
    }
  }
  if (currentLength === cart.length) {
    return "That item is not in your cart."
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total()
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}
