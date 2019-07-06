var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var object = {itemName: item, itemPrice: Math.floor(Math.random()*100) + 1}
  cart.push(object)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length !== 0) {
    var cartMessage = "In your cart, you have "
      for (var i = 0; i < cart.length; i++) {
          if (cart.length == 1) {
            cartMessage += `${cart[i].itemName} at $${cart[i].itemPrice}.`
          } else if (i < cart.length - 1) {
            cartMessage += `${cart[i].itemName} at $${cart[i].itemPrice}, `
          } else {cartMessage += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`}
      }
    return cartMessage
  } else {return "Your shopping cart is empty."}
}

function total() {
  var cartAmount = 0
  for (var i = 0; i < cart.length; i++) {
    cartAmount += cart[i].itemPrice
  }
  return cartAmount
}

function removeFromCart(item) {
  var cartCheck = false

  for(var i = 0; i < cart.length; i++) {
    if(item === cart[i].itemName) {
      cartCheck = true
      cart.splice(i,1)
    }
  }

  if (cartCheck) {
    return cart
  } else {return "That item is not in your cart."}
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var emptyMessage = "Your total cost is $"
    var totalCost = 0
      for (var i = 0; i < cart.length; i++) {
        totalCost += cart[i].itemPrice
      }
      emptyMessage += `${totalCost}, which will be charged to the card ${cardNumber}.`
      cart = []
      return emptyMessage
  } else {
    return "Sorry, we don't have a credit card on file for you."}
}
