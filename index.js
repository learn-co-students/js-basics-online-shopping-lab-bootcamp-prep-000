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
  cart.push( {[item]: price} );
  console.log(`${item} has been added to your cart.`);

  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
    return getCart()
  }

  var msg = []
  for (var i in cart) {
    var item = Object.keys(cart[i]);
    var price = cart[i][item]

    msg.push(`${item} at \$${price}`)

    console.log(`In your cart, you have ${msg.join(', ')}.`)
  }
}

function removeFromCart(item) {
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(cart.indexOf(i), 1)

      return cart
    }
  }

  console.log(`That item is not in your cart.`)
  return cart
}

function placeOrder(cardNumber) {
  if (typeof cardNumber === 'undefined') {
    console.log(`We don\'t have a credit card on file for you to place your order.`)
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }

  return cart
}
