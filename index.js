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

// Start GS code
function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push( {item: price} );
  console.log(`${item} has been added to your cart.`);

  return getCart()
}

function viewCart() {
  var itemInCart = Object.keys(cart)
  var msg = ""

  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
    return getCart()
  }


  for (var items in cart) {
    msg += `${cart} at ${cart[itemInCart]}, `

    console.log(`In your cart, you have socks at ${msg}`)
  }

  return getCart()
}
