var cart = []

//This function was provided for me by Flatiron
//See the (provided) function below for a more efficient way of accessing and 
// looping over objects within arrays.

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t = t + cart[i][item]
    }
  }

  return t
}

//Same - this is from Flatiron

function setCart(newCart) {
  cart = newCart;
}

//These are mine 

function getCart() {
  return cart
}

function addToCart(item) {
  let cartLength = cart.length

  let itemPrice = Math.floor(Math.random() * 100)

  cart.push({[item]: itemPrice})

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {

    let message = `In your cart, you have`

    for (var i = 0; i < cart.length; i++) {
      let itemKeys = Object.keys(cart[i])

      let cartItem = itemKeys[0]

      let itemPrice = cart[i][cartItem]

      message = message + ` ${cartItem} at $${itemPrice},`

    } message = message.slice(0, -1) + "."

    console.log(message)
  }
}

function removeFromCart(item) {
  let cartCounter = 0

  for (var i = 0; i < cart.length; i++) {
    let itemKeys = Object.keys(cart[i])
    let cartItem = itemKeys[0]    

    if (cartItem == item) {

      cart.splice(i, 1)

      cartCounter = cartCounter + 1
    }
  } if (cartCounter === 0) {
    console.log('That item is not in your cart.')
  } return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`We don't have a credit card on file for you to place your order.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0)
  }
}




