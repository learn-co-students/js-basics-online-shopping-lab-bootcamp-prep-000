var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var list = { itemName: "name", itemPrice: 0 }
  list.itemName = item
  list.itemPrice = Math.floor(Math.random() * (101 - 1)) + 1
  cart.push(list)
  return `${list['itemName']} has been added to your cart.`
}

function viewCart() {
  var str = "In your cart, you have "
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        str += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else {
        str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
  }
  return str
}

function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var t = total()
    cart = []
    return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
  }
}





