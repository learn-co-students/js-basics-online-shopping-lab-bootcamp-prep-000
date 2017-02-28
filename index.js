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
  var obj = {[item]: price}

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

function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(name)) {
      cart.splice(i, 1)
    }
  }
  var myObject = {}
  myObject.prop = name
  if (myObject.hasOwnProperty('prop')) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(ccnumber) {
    if (!ccnumber) {
      console.log("We don't have a credit card on file for you to place your order.")
    }
    else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccnumber}.`)
    }
    cart = []
  }
