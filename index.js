var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1
  cart.push({itemName: item, itemPrice: price})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
  else if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }

  var str = "In your cart, you have "

  for(var i = 0; i < cart.length; i++) {
    if (i == cart.length - 1) {
      str += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    } else {
      str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return str
}

function total() {
  var price = 0
  for(var i = 0; i < cart.length; i++) {
    price += cart[i].itemPrice
  }

  return price
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
      return ""
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    return "Sorry, we don\'t have a credit card on file for you."
  } else {
    var price = total()
    cart = []
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`
  }
}
