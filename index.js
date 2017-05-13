var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
    return cart
}

function addToCart(item) {
    console.log(`${item} has been added to your cart.`)
    var merch = {}

    cart.push(Object.assign({},merch, {
      [item]: Math.floor(Math.random() * 100)
    }))
    // Object.assign({},cart,{[item]: Math.floor(Math.random() * 100)})

    return cart
}

function viewCart() {
  if(cart.length < 1) {
    console.log("Your shopping cart is empty.");
    return;
  }

  var msg = 'In your cart, you have '
  for(let i = 0; i < cart.length; i++) {
    var merchandise = cart[i]
    for(var detail in merchandise) {
      var name = detail
      var price = merchandise[detail]
      msg += `${name} at $${price}`
    }
    if(i===cart.length-1) {
      msg += '.'
    } else {
      msg += ', '
    }
  }
  console.log(msg)
}

function removeFromCart(item) {
  var foundItem = false
  var i = 0
  for(let i = 0;i<cart.length;i++) {
    for(var detail in cart[i]) {
      if(detail === item) {
        foundItem = true
        break;
      }
    }

    if(foundItem === true) {
      break;
    }
  }
  if(foundItem === true) {
    cart.splice(i)
  } else {
    console.log("That item is not in your cart.")
  }
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

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log ("We don't have a credit card on file for you to place your order.")
    return
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
