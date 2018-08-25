var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var lcart = getCart()
  setCart([...lcart, { itemName: item, itemPrice: Math.floor(Math.random() * (100 - 1) + 1) }])
  return `${item} has been added to your cart.`
}

function itemToString(item) {
  return `${item.itemName} at $${item.itemPrice}`
}

function viewCart() {
  var lcart = getCart()
  if (lcart.length === 0) {
    return "Your shopping cart is empty."
  }
  var msg = 'In your cart, you have '
  for (var i = 0; i < lcart.length; i++) {
    if (i == 0) {
      msg += `${itemToString(lcart[i])}`
    } else if (i + 1 === lcart.length) {
      msg += `, and ${itemToString(lcart[i])}`
    } else {
      msg += `, ${itemToString(lcart[i])}`
    }
  }
  return msg + '.'
}

function total() {
  return getCart().reduce(((sum, item) => sum + item.itemPrice),0)
}

function removeFromCart(item) {
  var lcart = getCart()
  for (var i = 0; i < lcart.length; i++) {
    if ( item === lcart[i].itemName ) {
      return lcart.splice(i, 1)
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  setCart([])
  return msg
}
