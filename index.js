var cart = [];
var object = {
  itemName: name,
  itemPrice: price
}
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
    itemPrice: test,
  }
  cart.push(newItem)
  return `${newItem.itemName} has been added to your cart.`
}

function viewCart() {
  for (var i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`
    } else if (cart.length === 2) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}.`
    } else if (cart.length === 3) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}, ${cart[i + 1].itemName} at $${cart[i + 1].itemPrice}, and ${cart[i + 2].itemName} at $${cart[i + 2].itemPrice}.`
    } else if (cart.length === 0) {
      return 'Your shopping cart is empty.'
    }
  }
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    totalValue += cart[i].itemPrice;
  }
   return totalValue
}


function removeFromCart(item) {
  for (var i = 0; i<cart.length; i++) {
    if (cart[i].name === item) {
      cart.splice(cart[i],1);
    } else if (cart[i].name !== item) {
      return 'That item is not in your cart.'
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    cart = [];
    return `Your total cost is $${test}, which will be charged to the card ${cardNumber}.`
  }
}
