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
  var price = Math.floor((Math.random() * 100) + 1)
  cart.push( {`${item}: ${price}`} )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var price in cart) {
      console.log(`In your cart you have ${cart} at $${price}.`)
    }
  }
}

function removeFromCart(item) {
  if (`${item}` in cart) {
    deleteItem = `${item}`
    delete cart.deleteItem
    return cart
  }
  else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === null){
    return "We don't have a credit card on file for you to place your order."
  }
  else {
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}`)
    var cart = []
  }
}
