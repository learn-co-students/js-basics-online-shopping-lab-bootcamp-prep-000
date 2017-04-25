var cart;

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  console.log(`${item} has been added to your cart.`)
  cart.push(item)
  return cart
}

function getCart() {
  return cart
}

function viewCart() {
  // var cart = getCart()
  if (cart.length < 1) {
    console.log('Your shopping cart is empty.')
    return
  }
  var cartContents = ''
  var cartLength = cart.length
  for (var key in cart) {
    cartContents += `${cart[key]} at $${cart[key].price}`
    cartLength--
    if (cartLength < 1) {
      cartContents += '.'
    } else {
      cartContents += ', '
    }
  }
  console.log(`In your cart, you have ${cartContents}`)
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
