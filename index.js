var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push( { [item]: Math.floor(Math.random() * 100 + 1) } )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }
  if (cart.length === 1) {
    var key = Object.keys(getCart()[0])[0]
    console.log(`In your cart, you have ${key} at $${getCart()[0][key]}.`)
  }
  var str = 'In your cart, you have '
  if (cart.length === 2) {
    console.log(`${str}${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  }
  if (cart.length > 2) {
    for (var a = 0; a < cart.length - 1; a++) {
      str += `${Object.keys(cart[a])} at $${Object.values(cart[a])}, `
    }
    for (var z = cart.length - 1; z < cart.length; z++) {
      str += `and ${Object.keys(cart[z])} at $${Object.values(cart[z])}.`
    }
  }
  console.log(str)
}

function total() {
  var tot = 0
  for (var i = 0; i < cart.length; i++) {
    tot += Number(Object.values(cart[i]))
  }
  return tot
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
