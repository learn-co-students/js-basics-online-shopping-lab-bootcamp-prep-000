var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart;
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

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return
  }
  const cartItemsAndCosts = []
  for(let i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      cartItemsAndCosts.push(`${item} at $${cart[i][item]}`)
    }
  }
  console.log(`In your cart, you have ${cartItemsAndCosts.join(', ')}.`)
}

function removeFromCart(item) {
  var itemRemoved = false
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      itemRemoved = true;
      break
    }
  }
  if(!itemRemoved) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if(cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  setCart([])
}
