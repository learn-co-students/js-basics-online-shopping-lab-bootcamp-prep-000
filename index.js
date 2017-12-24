let cart = []

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let total = 0

  for (let i = 0; i < cart.length; i++) {
    for (const price in cart[i]) {
      total += cart[i][price]
    }
  }
  return total
}

function getCart() {
  return cart
}

function addToCart(item) {
  const itemPrice = Math.floor(Math.random() * 100)
  const keyValuePair = { [item] : itemPrice }
  cart.push(keyValuePair)

  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length) {
    const newCart = [];
    for (let i = 0; i < cart.length; i++) {
      for (const item in cart[i]) {
        newCart.push(` ${item} at $${cart[i][item]}`)
      }
    }
   console.log(`In your cart, you have${newCart}.`)
  }
 console.log("Your shopping cart is empty.")
}

function removeFromCart(item) {
  cart[item] ? delete cart[item] : console.log("That item is not in your cart.")
  return cart = []
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  return cart = []
}
