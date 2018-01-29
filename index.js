var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  var item = { [name]: Math.floor(Math.random() * Math.floor(100)) }
  cart.push(item)
  console.log(`${name} has been added to your cart.`)
  return cart
}

function viewCart() {
  var msg = 'In your cart, you have'
  if (cart.length === 0){
    msg = 'Your shopping cart is empty.'
  } else if (cart.length === 1) {
    msg = msg + ` ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
  } else if (cart.length === 2) {
    msg = msg + ` ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      msg = msg + ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
    }
    msg = msg + ` and ${Object.keys(cart[cart.length - 1])} at $${Object.values(cart[cart.length - 1])}.`
  }
  console.log(msg)
}

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    sum = sum + parseInt(Object.values(cart[i]))
  }
  return sum
}

function removeFromCart(item) {
  var i = 0
  var inCart = 0
  //account for empty cart
  if (cart.length === 0) {
    var msg = 'That item is not in your cart.'
  } else {
    do {
      inCart = inCart + cart[i].hasOwnProperty(item)
      i = i + 1
    } while (inCart < 1)
    if (i === cart.length && inCart < 1) {
      msg = 'That item is not in your cart.'
    } else {
      cart.splice(i - 1, 1)
    }
  }
  console.log(msg)
  return cart
}

function placeOrder(cardNumber) {
  var msg = ''
  if (isNaN(cardNumber)) {
    msg = `Sorry, we don't have a credit card on file for you.`
  } else {
    msg = `Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`
    cart = []
  }
  console.log(msg)
  return cart
}
