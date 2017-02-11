var cart;
cart = [];

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
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }

    var cart_items = 'In your cart, you have '
    var cartItems = []
    for (var i = 0; i < cart.length; i++) {
        var itemsAndPrice = cart[i]
        var item = Object.keys(itemsAndPrice)[0]
        var price = itemsAndPrice[item]
        cartItems.push(`${item} at \$${price}`)
    }

    console.log(cart_items + `${cartItems.join(", ")}.`)

}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = cart.slice(0,i) + cart.slice(i+1,l)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var amount = total()
    cart = []
    console.log(`Your total cost is $${amount}, which will be charged to the card ${cardNumber}.`)
  }
  else {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
}
