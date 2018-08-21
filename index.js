var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var newcart = {}
  Object.assign(newcart, {itemName: item,
      itemPrice: price})
  cart.push(newcart)
  return `${newcart.itemName} has been added to your cart.`
}

function viewCart() {
  if (!cart.length) {
    return "Your shopping cart is empty."
  }
  const cartlist = []
  for (var i = 0; i < cart.length; i++) {
    cartlist.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  if (cartlist.length > 1) {
    const lastItem = cartlist.pop()
    return `In your cart, you have ${cartlist.join(', ')}, and ${lastItem}.`
  }
  return `In your cart, you have ${cartlist}.`
}

function total() {
  const cartnumbers = []
  var cartsum = 0
  for (var i = 0; i < cart.length; i++) {
    cartnumbers.push(cart[i].itemPrice)
  }
  for (var i = 0; i < cartnumbers.length; i++) {
    cartsum += cartnumbers[i]
  }
  return cartsum
}

function removeFromCart(item) {
  var i = 0
  while (i < cart.length) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    }
    else i++
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  const totalcart = total()
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  cart = []
  return `Your total cost is $${totalcart}, which will be charged to the card ${cardNumber}.`
}
