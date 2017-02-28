var cart = []


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

function setCart(newCart) {
  cart = newCart
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
  } else {
    let items = cart.map((item) => {
      let key = Object.keys(item)[0]
      return `${key} at $${item[key]}`
    })

    console.log(`In your cart, you have ${items.join(', ')}.`)
  }
}

function removeFromCart(item) {
  let find = cart.find((hash) => hash.hasOwnProperty(item))

  if (typeof(find) == 'undefined') {
    console.log("That item is not in your cart.")
  } else {
    cart = cart.filter((itemHash) => !itemHash.hasOwnProperty(item))
  }

  return cart
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) == 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
