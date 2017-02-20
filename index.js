var cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  let itemObj = {
    [item]: Math.floor(Math.random() * 100) + 1
  }
  cart.push(itemObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length > 0) {
    let itemCostPairs = []
    cart.forEach(line => {
      for (let item in line) {
        itemCostPairs.push(`${item} at $${line[item]}`)
      }
    })
    console.log(`In your cart, you have ${itemCostPairs.join(', ')}.`)
  } else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(item) {
  cart.forEach((line, index) => {
    if (line.hasOwnProperty(item)) {
      cart.splice(index, 1)
      return cart
    }
  })
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
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
