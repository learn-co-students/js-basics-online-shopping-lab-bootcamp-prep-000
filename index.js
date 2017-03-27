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
  var price = Math.floor(Math.random() * 100)
  cart.push( {[item]: price} )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const l = cart.length
  if (l === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var announcement = 'In your cart, you have'
    for (var i = 0; i < l; i++) {
      for (var item in cart[i]) {
        announcement += ` ${item} at $${cart[i][item]},`
      }
    }
    announcement = announcement.slice(0, announcement.length -1)
    announcement += '.'
    console.log(announcement)
  }
}

function removeFromCart(item) {
  const l = cart.length
  for (let i = 0; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}