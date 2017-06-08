var cart = []

/*
var item = 'pizza'
var price = Math.floor(Math.random() * 100)
cart.push({[item] : price})
console.log(cart[0][item])
console.log(cart[0])


addToCart("socks")
addToCart("puppy")
addToCart("iPhone")
const socksCost = getCart()[0]["socks"]
const puppyCost = getCart()[1]["puppy"]
const iPhoneCost = getCart()[2]["iPhone"]
viewCart()
*/

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var message = "In your cart, you have "
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      for (var items in cart[i]) {
        message += `${items} at $${cart[i][items]}, `
      }
    }
    message = message.substring(0, message.length - 2)
    message += '.'
  }
  else {
    message = "Your shopping cart is empty."
  }
  console.log(message)
}

addToCart('pizza')
removeFromCart('pizza')

function removeFromCart(item) {
   for (var i = 0; i < cart.length; i++) {
      for (var items in cart[i]) {
        if (cart[i].hasOwnProperty(item)) {
          cart.splice(i, 1)
          return cart
        }
      }
    }
  console.log("That item is not in your cart.")
}

function placeOrder(ccNum) {
  if (ccNum === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  let t = total()
  console.log(`Your total cost is $${t}, which will be charged to the card ${ccNum}.`)
  cart.splice(0, cart.length)
}



function setCart(newCart) {
  cart = newCart
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
