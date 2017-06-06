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
  var newItem = {}
  newItem[item] = Math.floor(Math.random()*100)
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var statement = "In your cart, you have"
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        statement += ` ${item} at $${cart[i][item]}`
        if (i === (l-1)) {
          statement += "."
        } else {
          statement += ","
        }
      }
    }
    console.log(statement)
  }
}

function removeFromCart(item) {
  var statement = "That item is not in your cart."
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i)
      return statement = ""
    }
  }
  console.log(statement)
  return cart
}

function placeOrder(card) {
  if (card !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  cart.splice(0)
}
