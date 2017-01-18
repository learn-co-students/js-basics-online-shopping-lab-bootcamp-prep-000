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

  return parseInt(t)
}

function getCart() {
  return cart
}

function addToCart(item) {
  const price = Math.floor((Math.random() * 100) + 1)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var myString = "In your cart, you have"
    for (let i = 0; i<cart.length-1; i++) {
      myString = myString + ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`
    }
    myString = myString + ` ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
    console.log(myString)
  }
}



function removeFromCart(item) {
  if (cart.length === 0) {
    console.log('That item is not in your cart.')
  } else {
    for (let i = 0; i<cart.length; i++) {
      if (Object.keys(cart[i]) == item) {
        cart.splice(i,1)
        return cart
      } else {
        console.log('That item is not in your cart.')
      }
    }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
