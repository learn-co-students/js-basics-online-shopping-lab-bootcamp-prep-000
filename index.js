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
function getCart(){
  return cart
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  const b = cart.length
  if (b === 0) {
    console.log(`Your shopping cart is empty.`)
    return cart
  }
  const itemPricePairs = []
  for (var i = 0; i < b; i++) {
    let pairLocation = cart[i]
    let item = Object.keys(pairLocation)[0]
    let price = pairLocation[item]
    itemPricePairs.push(`${item} at $${price}`)
    console.log(`In your cart, you have ${itemPricePairs.join(', ')}.`)
  }
}

function removeFromCart(item) {
  const b = cart.length
  var inCart = false
  for (var i = 0; i < b; i++) {
    if (cart[i].hasOwnProperty(item)) {
      inCart = true
      cart = cart.slice(0, i)
    }
  }
     if (inCart === false) {
       console.log(`That item is not in your cart.`)
     }
      return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(`We don\'t have a credit card on file for you to place your order.`)
  } else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.length = 0
}
