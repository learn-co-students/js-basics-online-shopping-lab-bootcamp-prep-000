var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemDescription = { itemName: item, itemPrice:(Math.floor(Math.random() * 100)) }
  cart.push(itemDescription)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  var returnLine = "In your cart, you have"
  for (var i = 0; i < cart.length; i++) {
    if (i === 0) {
      returnLine = returnLine + ` ${cart[i].itemName} at $${cart[i].itemPrice}`
    } else if (i === cart.length - 1) {
      returnLine = returnLine + `, and ${cart[i].itemName} at $${cart[i].itemPrice}`
    } else {
      returnLine = returnLine + `, ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
  }
  return (returnLine + ".")
}

function total() {
  var totalCounter = 0
  for (var i = 0; i < cart.length; i++) {
    totalCounter = totalCounter + parseFloat(cart[i].itemPrice, 10)
  }
  return totalCounter
}

function removeFromCart(item) {
  var itemName = ""
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      itemName = item
      cart.splice(i, 1)
    }
  }
  if (itemName === item) {
    console.log(itemName)
  } else {
    return "That item is not in your cart."
  }
}


function placeOrder(cardNumber) {
  console.log(cardNumber)
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total()
    cart.length = 0
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
    
  }
}
