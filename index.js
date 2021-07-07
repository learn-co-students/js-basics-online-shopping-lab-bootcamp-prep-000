var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  if ( cart.push({itemName: item, itemPrice: getRandomPrice(100)}) ) {
    return `${item} has been added to your cart.`
  }
}

function getRandomPrice(max) {
  return Math.floor(Math.random()*max + 1)
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    var cartString = "In your cart, you have "
    var i = 0
    while (i < cart.length - 1) {
      cartString += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      i++
    }
    cartString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    return cartString
  }
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var i = cart.findIndex(x => x.itemName == item)
  if( i > -1 ) {
    cart.splice(i, 1)
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (arguments.length === 0) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var confirmation = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return confirmation
  }
}
