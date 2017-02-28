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
  var price = Math.floor(Math.random() * 10)
  var obj = {item: price}

  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var itemTemp = []

  for (var i = 0; i < cart.length; i++) {
    var itemPrices = cart[i]
    var itemKey = Object.keys(itemPrices)[0]
    var value = itemPrices[itemKey]
    itemTemp.push(`${itemKey} at $${value}`)
  }
  console.log('In your cart, you have ' + itemTemp.join(', ') + '.')
}
