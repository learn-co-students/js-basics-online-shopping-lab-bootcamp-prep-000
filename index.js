var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random() * 100)
  }
  cart.push(cartItem)
  return `${item} has been added to your cart.`
}

function viewCart() {

  debugger;

  if (!cart.length) { return 'Your shopping cart is empty.'}

  var str = 'In your cart, you have '
  for (let i = 0; i < cart.length; i++) {
      let item = cart[i]

      if (i > 0) {
        str+= ", "
        if (item === cart[cart.length-1]) {
            str += "and "
        }
      }
      str += `${item.itemName} at $${item.itemPrice}`
  }
  str += "."
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
      return cart.splice(i, 1)
    }
  }

  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var str = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return str

}
