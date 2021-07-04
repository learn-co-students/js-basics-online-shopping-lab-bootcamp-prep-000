var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
  var item = {}
  item.itemName = itemName
  item.itemPrice = Math.floor(Math.random()*(100) + 1)
  cart.push(item)
  return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    var tempName = cart[0].itemName
    var tempPrice = cart[0].itemPrice
    return `In your cart, you have ${tempName} at $${tempPrice}.`
  } else {
    var string = 'In your cart, you have'
    var cartName
    var cartPrice
    for (var i = 0; i < cart.length - 1; i++) {
      cartName = cart[i].itemName
      cartPrice = cart[i].itemPrice
      string += ` ${cartName} at $${cartPrice},`
    }
    i = cart.length - 1
    cartName = cart[i].itemName
    cartPrice = cart[i].itemPrice
    string += ` and ${cartName} at $${cartPrice}.`
    return string
  }
}

function total() {
  // write your code here
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    var totalPrice = 0
    for (var i = 0; i < cart.length; i++) {
      totalPrice += cart[i].itemPrice
    }
    cart = []
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
