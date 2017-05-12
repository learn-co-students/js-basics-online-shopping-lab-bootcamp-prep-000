var cart;

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
  const price = Math.floor(Math.random() * 100)
  const itemObj = {[item]: price}
  cart.push(itemObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  let itemsList = []
  cart.map((item) => {
    for (let key in item) {
      itemsList.push(`${key} at $${item[key]}`)
    }
  })
  console.log(`In your cart, you have ${itemsList.join(', ')}.`)
  return cart
}

function removeFromCart(item) {
  let hasItem = false
  cart.map(i => {
   if (i.hasOwnProperty(item)) {
    hasItem = true
    cart = cart.filter(x => x !== cart[cart.indexOf(i)])
   }
 })
 if (!hasItem) {
  console.log('That item is not in your cart.')
 }
 return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart
}
