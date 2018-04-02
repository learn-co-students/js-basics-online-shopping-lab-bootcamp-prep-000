var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  console.log(item)
  const obj = {};
  obj.itemName = item
  obj.itemPrice = Math.floor(Math.random() * 100)
  cart.push(obj)
  return `${obj.itemName} has been added to your cart.`

}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var receipt = `In your cart, you have ` 
    for (var i = 0; i < cart.length; i++) {
      if(i === cart.length - 1 && cart.length > 1) {
        receipt += "and "
      }
      receipt += `${cart[i].itemName} at $${cart[i].itemPrice}`
        if(i < cart.length - 1) {
          receipt += ", "
        } else {
          receipt += "."
        }
      } 
      return receipt 
  } 
}

function total() {
  var sum = 0
  for(var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1)
      return
    }
  }
   return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return "Sorry, we don\'t have a credit card on file for you."
  } else {
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  }
  cart = []
  return message
}
