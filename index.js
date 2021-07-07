var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemDetails = {}
  itemDetails.itemName = item
  itemDetails.itemPrice = Math.floor(Math.random() * 100)
  cart.push(itemDetails)
  return `${item} has been added to your cart.`
}

function isEnd(a,b) {
  if (a === b) {
    return 'and '
  } else {
    return ''
  }
}
function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    var returnString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    for (var i = 1; i < cart.length; i++) {
      returnString += `, ${isEnd(i, cart.length - 1)}${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    
  }
  return `${returnString}.`
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1)
      return cart
    } 
  }
  return 'That item is not in your cart.'
}

function placeOrder(ccNumber) {
  if (ccNumber) {
    var returnString = `Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`
    setCart([])
    return returnString
  } else {
    return `Sorry, we don't have a credit card on file for you.`
  }
}