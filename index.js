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
 cart.push(Object.assign({"itemName" : item}, {"itemPrice" : Math.floor(Math.random() * Math.floor(99) + 1)}))
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var message = "";
  if (cart.length > 1) {
    for (var i = 0; i < cart.length - 1; i ++) {
      message = message + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return `In your cart, you have ${message}and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
      return "Your shopping cart is empty."
  }
  
}

function total() {
  // write your code here
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  var inCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      inCart = true
    } else {
      inCart = false
    }
  }
  if (inCart === false) {
    return `That item is not in your cart.`
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var orderTotal = total()
    cart = []
    return `Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`
  }
  return cart
}
