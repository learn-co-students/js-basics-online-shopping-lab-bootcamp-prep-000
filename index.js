var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ itemName: item, itemPrice: Math.floor(1 + Math.random() * 100) })
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  var result = "In your cart, you have "
  for (let i = 0; i < cart.length; i++) {
    if (i < cart.length - 1) {
      result += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    else {
      result += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  }
  return result
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  var found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      found = true
      break;
    }
  }
  if (!found) {
    return "That item is not in your cart."
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return message
}
















