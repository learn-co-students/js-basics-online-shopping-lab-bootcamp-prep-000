var cart = []

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
  var string = "In your cart, you have"
  var tempKey
  if (cart.length > 0) {
    tempKey = Object.keys(cart[0])[0]
    string = `${string} ${tempKey} at $${cart[0][tempKey]}`
    for (var i = 1; i < cart.length; i++) {
      tempKey = Object.keys(cart[i])[0]
      string = `${string}, ${tempKey} at $${cart[i][tempKey]}`
    }
    console.log(`${string}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item) {
  var notfound = true
  for ( var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      notfound = false
      cart = [...cart.slice(0,i), ...cart.slice(i+1)];
      return cart
    }
  }
  if (notfound) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(creditCard) {
  function cartTotal() {
    var total = 0
     for ( var i = 0; i < cart.length; i ++) {
       total = total + cart[0][Object.keys(cart[0])[0]]
       cart.shift()
     }
     return total
  }

  if (creditCard) {
    console.log(`Your total cost is $${cartTotal()}, which will be charged to the card ${creditCard}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
