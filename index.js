var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = { ['itemName']: `${item}`, ['itemPrice']: Math.floor(Math.random() * 20) }
  cart.push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var itemsInCart = []
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i === 0 ) {
        itemsInCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      } else if (0 < i && i < cart.length - 1) {
        itemsInCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      } else if (i === cart.length - 1) {
        itemsInCart.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
  }
  return 'In your cart, you have ' + itemsInCart + '.'
}

function total() {
  var totalItemPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalItemPrice += cart[i].itemPrice
  }
  return totalItemPrice
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return 'Sorry, we don\'t have a credit card on file for you.'
  } else {
    var totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}