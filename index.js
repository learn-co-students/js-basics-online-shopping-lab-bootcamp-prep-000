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
 var itemb = {}
 itemb.itemName = item
 itemb.itemPrice = Math.floor(100*Math.random())+1
 cart.push(itemb)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    var message = "In your cart, you have"
    for (var i = 0; i < cart.length-1; i++) {
      message = message + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    message = message + ` and ${cart[(cart.length)-1].itemName} at $${cart[(cart.length)-1].itemPrice}.`
    return message
  }
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  var i = 0
  while (i < cart.length) {
    if (cart[i].itemName == item) {
      cart.splice(i,1)
      return cart
    }
    i++
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var totalb = 0
    totalb = totalb + total()
    cart = []
    return `Your total cost is $${totalb}, which will be charged to the card ${cardNumber}.`
  }
}
