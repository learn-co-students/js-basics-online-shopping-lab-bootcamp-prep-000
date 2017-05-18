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
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item] : price})
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  let l = cart.length

  if (l === 0) {
    return console.log("Your shopping cart is empty.")
  }

    const allItemsAndPrices = []

  for (let i = 0; i < cart.length; i++) {
      let itemPriceIndex = cart[i]
      let item = Object.keys(itemPriceIndex)[0]
      let price = itemPriceIndex[item]

      allItemsAndPrices.push(`${item} at $${price}`)
    }
    return console.log(`In your cart, you have ${allItemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      itemInCart = true
      return cart
    }
  }
  if (itemInCart === false) {
    return console.log(`That item is not in your cart.`)
  }
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === "undefined") {
    return console.log(`We don't have a credit card on file for you to place your order.`)
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return
  }
}
