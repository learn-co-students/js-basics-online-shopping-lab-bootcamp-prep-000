var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {itemName:item,itemPrice:Math.floor(Math.random()*100)+1}
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length===0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    var message = 'In your cart, you have'
    for (let i=0;i<cart.length-1;i++) {
      message = `${message} ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    var lastItem = cart.slice(-1)
    message = `${message} and ${cart.slice(-1)[0].itemName} at $${cart.slice(-1)[0].itemPrice}.`
    return message
  }
}

function total() {
  var totalValue = 0
  for (let i=0;i<cart.length;i++) {
    totalValue = totalValue + cart[i].itemPrice
  }
  return totalValue
}

function removeFromCart(item) {
  var originalCartLength = cart.length
  for (let i=0;i<cart.length;i++) {
    if (cart[i].itemName===item) {
      cart.splice(i,1)
    }
  }
  if (originalCartLength===cart.length) {
    return 'That item is not in your cart.'
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  var holdTotal = total()
  cart = []
  return `Your total cost is $${holdTotal}, which will be charged to the card ${cardNumber}.`
  }