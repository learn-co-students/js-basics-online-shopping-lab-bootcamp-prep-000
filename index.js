var cart = []

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100)
  cart.push({
    [item]: price
  })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    let list = []
    for (let i = 0; i < cart.length; i++) {
      let string = ` ${Object.keys(cart[i])} at \$${cart[i][Object.keys(cart[i])]}`
      list.push(string)
    }
    console.log(`In your cart, you have${[...list]}.`)
  }
}

function total() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  let removing = null
  for (let i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item) {
      removing = i
    }
  }

  console.log(removing)
  if (removing === null) {
    console.log("That item is not in your cart.")
  } else {
    cart.splice(removing, 1)
  }
  console.log(cart)
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
