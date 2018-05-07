var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var newObject = {
    itemName:`${item}`,
    itemPrice: price
  }
  cart.push(newObject);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else if (cart.length > 2) {
    var newList = []
    for (var i = 0; i < cart.length - 1; i++) {
      newList.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return `In your cart, you have${newList}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  var thePrices = []
  for (var i = 0; i < cart.length; i++) {
    thePrices.push(cart[i].itemPrice)
  }
  function add (a, b) {
    return a + b
  }
  var sum = thePrices.reduce(add)
  return sum
  }

function removeFromCart(item) {
  for (var i = 0; i <cart.length; i++) {
  if (item === cart[i].itemName) {
    cart.splice(i, 1)
    var itWorked = 'yes'
    }
  }
if (itWorked !== 'yes') {
  return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (typeof cardNumber == 'number') {
    var announcement = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart.length = 0
    return announcement
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
