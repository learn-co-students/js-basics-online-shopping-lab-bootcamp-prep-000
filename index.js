var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)
  var itemObj = {itemName: [item], itemPrice: price}
  cart.push(itemObj)
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  var retString = "In your cart, you have "
  for (var i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      retString += `${cart[i].itemName} at $${cart[i].itemPrice}.`
    } else if (i !== cart.length - 1) {
      retString += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    } else {
      retString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    } 
  }
  
  return retString
}

function total() {
  var sum = 0
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].itemPrice
  }
  
  return sum
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sum = total()
    cart.splice(0, cart.length)
    
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}