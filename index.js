var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
  "itemName": item,
  "itemPrice": Math.floor(Math.random() * 100) + 1
 })
 return `${item} has been added to your cart.`
}

function viewCart() {
  var result = []
  var cartLen = cart.length
  
  if(cartLen > 0){
    for(var i=0; i<cart.length; i++){
      result.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
  }
  if(cartLen > 1){
    var lastItem = result.pop()
    return "In your cart, you have " + result.join(", ") + ", and " + lastItem + "."
  }
  else if(cartLen == 1){
    return "In your cart, you have " + result[0] + "."
  }
  else
    return "Your shopping cart is empty."
}

function total() {
  var cartLen = cart.length
  var totalPrice = 0
  for(var i=0; i<cartLen; i++){
    totalPrice += cart[i].itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  var cartLen = cart.length
  var exists = false
  for(var i=0; i<cartLen; i++){
    if(cart[i].itemName == item){
      cart.splice(i, 1)
      exists = true
      i--
      cartLen--
    }
  }
  if(exists) return cart
  else return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  var totalPrice = total()
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
    cart.length = 0
    return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
  
}
