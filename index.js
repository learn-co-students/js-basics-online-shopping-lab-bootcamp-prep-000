var cart = [];

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
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var list = "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      var items = Object.keys(cart[i])
      list += ` ${items} at $${cart[i][items]},`
    }
    console.log(list.slice(0, -1) + ".")
  }
}

function setCart(array) {
  cart = array
}

function removeFromCart(item) {
   for (var i = 0; i < cart.length; i++) {
   if (Object.keys(cart[i]).includes(item)) {
     return cart.splice(i, 1)
     }
   }
  console.log("That item is not in your cart.")
}

function total() {
  var counter = 0
  for (var i = 0; i < cart.length; i++) {
    counter += cart[i][Object.keys(cart[i])]
  }
  return counter
}

function placeOrder(card) {
  if (card === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
    cart = []
  }
}
