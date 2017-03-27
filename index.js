var cart = [];

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100 - 0)) + 0;
  cart.push({ [item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (!cart.length) {
    console.log('Your shopping cart is empty.')
  }

  const itemsPrices = []
  for (var i = 0; i < cart.length; i++) {
    var itemPrice = cart[i]
    var item = Object.keys(itemPrice)[0]
    var price = itemPrice[item]
    itemsPrices.push(`${item} at $${price}`)
  }
  console.log(`In your cart, you have ${itemsPrices.join(', ')}.`)
}


function removeFromCart(item) {
  var inTheCart = false

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      inTheCart = true
      cart.splice(i, 1);
    }
  }
  if (!inTheCart) {
    console.log('That item is not in your cart.');
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`We don't have a credit card on file for you to place your order.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.splice(0, cart.length)
}