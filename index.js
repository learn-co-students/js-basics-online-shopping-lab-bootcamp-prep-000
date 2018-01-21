var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  var itemAsObject = Object.assign({}, { [item]: itemPrice })
  cart.push(itemAsObject)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var cartStatement
  if (cart.length === 0) {
    cartStatement = "Your shopping cart is empty."
  } else if (cart.length === 1) {
    cartStatement = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`
  } else if (cart.length === 2) {
    cartStatement = `In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`
  } else {
    cartStatement = `In your cart, you have`
    for (var i = 0; i < cart.length - 1; i += 1) {
      cartStatement = cartStatement + ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
    }
    cartStatement = cartStatement + ` and ${Object.keys(cart[cart.length - 1])} at $${Object.values(cart[cart.length - 1])}.`
  }
  console.log(cartStatement)
}

function total() {
  var totalStatement = 0
  for (var i = 0; i < cart.length; i += 1) {
      totalStatement = totalStatement + parseInt(Object.values(cart[i]))
  }
  return totalStatement
}

function removeFromCart(item) {
  var removeIndex
  for (var i = 0; i < cart.length; i += 1) {
    if(Object.keys(cart[i])[0] === item) {
      removeIndex = i
      break
    }
  }
  if (removeIndex == undefined) {
    console.log(`That item is not in your cart.`)
  } else {
    cart.splice(removeIndex, 1)
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber != undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
}
