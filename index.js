var cart = []

function setCart(newCart) {
  cart = newCart
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price =  Math.floor((Math.random() * 100) + 1);
  var justAddedObj = {}
  justAddedObj[item] = price
  cart.push(justAddedObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const l = cart.length
  if (l === 0) {
    console.log(`Your shopping cart is empty.`)
  } else {
    var outputArray = []
    for (var i = 0; i < l; i++) {
      for (var item in cart[i]) {
        outputArray.push(`${item} at $${cart[i][item]}`)
      }
    }
  console.log(`In your cart, you have ${outputArray.join(', ')}.`)
  }
}

function removeFromCart(item) {
  var itemInCart = 0
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      itemInCart === 1
      return cart
    }
  }
  if (itemInCart === 0) {
    console.log(`That item is not in your cart.`)
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
  if (cardNumber === undefined) {
    console.log(`We don't have a credit card on file for you to place your order.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
