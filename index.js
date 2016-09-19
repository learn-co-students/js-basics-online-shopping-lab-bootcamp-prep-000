var cart = []

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
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
var l = cart.length
  if (l === 0) {
    console.log('Your shopping cart is empty.')
  }
  var costPairs = []
  for (var i = 0; i < l; i++) {
    var serial = cart[i]
    var item = Object.keys(serial)[0]
    var price = serial[item]
    costPairs.push(` ${item} at $${price}`)
  }
    console.log (`In your cart, you have${costPairs}.`)
}

function removeFromCart(name) {
  if (cart.length > 0) {
    for (var i in cart) {
      var object = cart[i]
      var item = Object.keys(object)[0]
      if (item === name) {
        cart.splice(i, 1);
        return cart
    }
    console.log('That item is not in your cart.')
    }
  }
    console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = []
  }
}
