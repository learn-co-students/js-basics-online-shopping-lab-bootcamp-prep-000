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
  const price = Math.floor(Math.random() * 100)

  cart.push({[item]:price})

  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(!cart.length) {
    return console.log("Your shopping cart is empty.")
  } else {

    const itemPricePairs = []

    for (let i = 0, l = cart.length; i < l; i++) {
      var itemPricePair = cart[i]
      var item = Object.keys(itemPricePair)[0]
      var price = itemPricePair[item]

      itemPricePairs.push(`${item} at \$${price}`)
    }
    console.log(`In your cart, you have ${itemPricePairs.join(', ')}.`)
  }
}

function removeFromCart(item) {
  var cartItem = false

  if (!cartItem) {
    console.log("That item is not in your cart.")
  }

  for(let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cartItem = true
      cart = cart.slice(0,i).concat(cart.slice(i + 1))
    }
  }

  return cart
}

function placeOrder(creditCardNumber) {
  if (!creditCardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNumber}.`)
    cart = []
  }
}
