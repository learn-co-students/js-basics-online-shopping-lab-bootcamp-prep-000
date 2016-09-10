var cart = []

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)
  console.log (item + " has been added to your cart.")
  cart.push({[item]: price})
  return cart
}

function viewCart() {
  if (!cart.length) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrice = []

  for (let i = 0, l = cart.length; i<l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrice.push(`${item} at \$${price}`)
  }

  console.log (`In your cart, you have ${itemsAndPrice.join(", ")}.`)
}

function removeFromCart(item) {
  let itemInCart = false
  for (let i = 0, l = cart.length; i<l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if (!itemInCart) {
    console.log ("That item is not in your cart.")
  }
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

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  return console.log ("We don't have a credit card on file for you to place your order.")
}
