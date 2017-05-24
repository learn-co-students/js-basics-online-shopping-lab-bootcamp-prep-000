var cart = []

function setCart (newCart) {
  cart = newCart
}

function total () {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart () {
  return cart
}

function addToCart (item) {
  const price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart () {
  if (cart.length === 0) {
    return console.log('Your shopping cart is empty.')
  } else {
    let itemsList = []
    for (let i = 0; i < cart.length; i++) {
      let itemAndPrice = cart[i]
      itemsList.push(`${Object.keys(itemAndPrice)[0]} at $${Object.values(itemAndPrice)[0]}`)
    }
    console.log(`In your cart, you have ${itemsList.join(', ')}.`)
  }
}

function removeFromCart (item) {
  let itemsList = []
  for (let i = 0; i < cart.length; i++) {
    let itemAndPrice = cart[i]
    itemsList.push(Object.keys(itemAndPrice)[0])
  }
  let itemIndex = itemsList.indexOf(item)
  if (itemIndex > -1) {
    cart.splice(itemIndex, 1)
  } else {
    console.log('That item is not in your cart.')
  }
}

function placeOrder (cc) {
  if (cc === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
  }
  cart = []
}