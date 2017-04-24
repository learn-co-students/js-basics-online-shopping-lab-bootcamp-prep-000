var cart;

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  cart.push(item)
  console.log(item + ' has been added to you cart.')
  return cart
}

function getCart() {
  return cart
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
