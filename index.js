var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

  cart.push({[item]:price})
  console.log (`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  const length = cart.length
  const itemAndPrices = []

  if (length == 0) {
    return console.log("Your shopping cart is empty.")
  }

  for (let i = 0; i < length; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemAndPrices.push(`${item} at \$${price}`)
    }
  console.log(`In your cart, you have ${itemAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  const length = cart.length

  for (let i = 0; i < length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  return console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }

}
