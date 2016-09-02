var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({'item' : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)    
  } else {
    var cartItems = Object.keys(cart)
    var text = `In your cart you have `
    for (var i = 0; i < cartItems.length; i++) {
      text += `${cart[cartItems[i]]} at ${cart[i]}!`
    }
    console.log(text)
  }
}

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
