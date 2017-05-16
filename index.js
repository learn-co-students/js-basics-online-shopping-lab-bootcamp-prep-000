var cart = [];

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
  let price = Math.floor(Math.random() * 100)
  // cart.push(`${item}` : `${price}`)
  let pair = {}
  pair[item] = price
  cart.push(pair)
  console.log(`${item} has been added to your cart.`)
  return getCart()
}

function viewCart() {
  var items = []
  for (let i = 0, l = cart.length; i < l; i++) {
    items.push(` ${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`)

  }
  if (cart.length != 0) {
    console.log(`In your cart, you have${items}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}



function removeFromCart(item) {
  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      break
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(creditCardNumber) {
  if(typeof(creditCardNumber) !== "number" ){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
  cart = []
}
