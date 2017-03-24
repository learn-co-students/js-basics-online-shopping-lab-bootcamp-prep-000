var cart = []

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

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

  if (!cart.length) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < cart.length; i++) {
      let priceAndItem = cart[i]
      let item = Object.keys(priceAndItem)[0]
      let price = priceAndItem[item]
      itemsAndPrices.push(`${item} at \$${price}`)
    }

    console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}



function removeFromCart(removeItem) {
  let itemInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(removeItem)) {
      itemInCart = true
      cart = cart.slice(0,i).concat(cart.slice(i + 1))
    }
  }
  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
  return cart
}
