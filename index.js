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
 cart.push({itemName: item, itemPrice: Math.floor(Math.random()*100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var result = "Your shopping cart is empty"
  if (cart.length > 0){
    result = "In your cart, you have"
    for (var i = 0; i < cart.length; i++){
      if (i > 0){
        if (i < (cart.length))
          {result += ","} 
        if ((cart.length > 1) && (i === cart.length - 1)) 
          {result += " and"}
      }
      result += ` ${cart[i].itemName} at \$${cart[i].itemPrice}`
    }
  }
  result += "."
  return result
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName){
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber)){ 
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var cost = total()
    cart = []
    return `Your total cost is \$${cost}, which will be charged to the card ${cardNumber}.`
  }
}
