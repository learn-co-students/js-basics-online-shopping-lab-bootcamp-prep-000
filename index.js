var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100)
 var newItem = {itemName: item, itemPrice: price};
 var cart = getCart()
 cart.push(newItem)
 setCart(cart)
 return `${item} has been added to your cart.`
}

function viewCart() {
  var cart = getCart()
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice} and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    var myString = "In your cart, you have "
    for (var i = 0; i < cart.length - 2; i++) {
      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    myString = myString + `${cart[cart.length-2].itemName} at $${cart[cart.length-2].itemPrice} `
    myString = myString + `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return myString
  }
}

function total() {
  var Cart = getCart()
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var cart = getCart()
  var index = 0
  var matchFound = false
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      index = i
      matchFound = true
    }
  }
  if (matchFound === false) {
    return "That item is not in your cart."
  }
  else {
    cart = cart.splice(index,1)
    return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var cart = getCart()
    var totalPrice = total()
    cart = []
    setCart(cart)
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}
