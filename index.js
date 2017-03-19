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
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length > 0) {
    var cartMessage = 'In your cart, you have'
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i]
      var name = Object.keys(item)[0]
      cartMessage += ` ${name} at \$${item[name]}`
      cartMessage += `${(i < cart.length-1)?',':'.'}`
    }
    console.log(cartMessage)
  } else {
    console.log('Your shopping cart is empty.')
  }
  return cart
}

function removeFromCart(item) {
  var itemFound = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      break;
    }
  }
  if (!itemFound) {
    console.log('That item is not in your cart.')  
  }
}

function placeOrder(creditCard) {
  if (isNaN(creditCard)) {
    console.log('We don\'t have a credit card on file for you to place your order.')
    return
  } else {
    var message = `Your total cost is $${total()}, `
    message += `which will be charged to the card ${creditCard}.`
    console.log(message)
    cart = []
  }
}

function total(){
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]
    var key = Object.keys(item)
    total += Number.parseInt(item[key])
  }
  return total
}
