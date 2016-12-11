var cart
cart = []

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
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var result = "In your cart, you have "
  var keys = []
  if (cart.length > 0) {
    for (var k = 0; k < cart.length; k++) {
      keys.push(Object.keys(cart[k]))
    }
    for (var i = 0; i < keys.length; i++) {
      result+= keys[i] + " at " + "$" + cart[i][keys[i]] + ", "
    }
    console.log(result.substr(0, result.length - 2) + ".")
  }
  else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(name) {
  var keys = []
  var check = 0
  for (var k = 0; k < cart.length; k++) {
    keys.push(Object.keys(cart[k]))
    }
  for (var y = 0; y < cart.length; y++) {
    if (keys[y][0] === name) {
      cart.splice(y, 1)
      check = 1;
      return cart
    }
    }
  if (check === 0) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(card = "empty") {
  if (card === "empty") {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
  }
  cart = []
}
