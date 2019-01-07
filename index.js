var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]: Math.floor(Math.random()*100 + 1)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function getVerboseObject(object) {
  return `${Object.keys(object)[0]} at $${object[Object.keys(object)[0]]}`
}

function viewCart() {
  if (cart.length < 1) {
    console.log(`Your shopping cart is empty.`);
    return
  }
  var verboseCart = `In your cart, you have ${getVerboseObject(cart[0])}`
  if (cart.length == 1) {
    console.log(`${verboseCart}.`)
  } else if (cart.length == 2) {
    console.log(`${verboseCart} and ${getVerboseObject(cart[1])}.`);
  } else {
    for (var i = 1; i < cart.length - 1; i++) {
      verboseCart = `${verboseCart}, ${getVerboseObject(cart[i])}`
    }
    console.log(`${verboseCart}, and ${getVerboseObject(cart[cart.length-1])}.`)
  }
}

function total() {
  var totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    totalCost += cart[i][Object.keys(cart[i])[0]]
  }
  return totalCost
}

function removeFromCart(item) {
  var wasInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = [...cart.slice(0, i), ...cart.slice(i+1)]
      wasInCart = true
      i--
    }
  }
  if (!wasInCart) {
    console.log('That item is not in your cart.')
  }
  return cart
}

removeFromCart('tea');

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
