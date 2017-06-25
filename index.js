var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = (Math.floor(Math.random()*100) + 1)
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)

 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return
  }

  var key = Object.keys(cart[0])[0]
  var shoppingCart = `In your cart, you have ${key} at $${cart[0][key]}`
  var cartLength = cart.length

  for (let i = 1; i < cartLength; i++) {
    key = Object.keys(cart[i])[0]

    if (cartLength === 2) {
      shoppingCart = `${shoppingCart} and ${key} at $${cart[i][key]}`
    } else if (i === cartLength - 1){
    shoppingCart = `${shoppingCart}, and ${key} at $${cart[i][key]}`
    } else {
      shoppingCart = `${shoppingCart}, ${key} at $${cart[i][key]}`
    }
  }
  shoppingCart = `${shoppingCart}.`
  console.log(shoppingCart)
}

function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0]
    total += cart[i][key]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++) {
    if (Object.keys(cart[i])[0] === item) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (! cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
