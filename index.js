
var cart = []

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
  let price = Math.floor(Math.random() * 100)
  let currentCart = getCart()
  currentCart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return currentCart
}

function viewCart() {
  let currentCart = getCart()
  let itemList = []
  if (currentCart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
  for (var i = 0; i < currentCart.length; i++) {
    for (let itemName in currentCart[i]) {
      itemList.push(`${itemName} at $${currentCart[i][itemName]}`)
    }
  }
  console.log(`In your cart, you have ${itemList.join(', ')}.`)
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    for (let itemName in cart[i]) {
      if (cart[i].hasOwnProperty(item)) {
        cart = [...cart.slice(0, i), ...cart.slice(i + 1)]
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
}
