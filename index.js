var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var pair = {}
 pair.itemName = item
 pair.itemPrice = Math.random() * 100
 cart.push(pair)
 return item + ` has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return ("Your shopping cart is empty.")
  }
  else var message = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
  if (cart.length === 1){
    return message + '.'
  }
  
  for (var i = 1; i < cart.length; i++){
    message = message + `, `
    if (i === (cart.length - 1)){
      message = message + `and `
    }
    message = message + `${cart[i].itemName} at $${cart[i].itemPrice}`
  }
  return message + '.'
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var found = false
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i , 1)
      found = true
    }
  }
  if (!found){
    return "That item is not in your cart."
  }
  else{
    return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else
  
  var cost = total()
  
  cart = []
  
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}
