var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor((Math.random() * 100) + 1)
  var obj = Object.assign( { [itemName]: itemPrice } )

  cart.push(obj)

  console.log(`${itemName} has been added to your cart.`)
  return cart
  }

function viewCart() {
  var cartString = "In your cart, you have"
  var name
  var price

  if (cart.length === 0) {
    cartString = "Your shopping cart is empty."
  } else if (cart.length === 1) {
    name = Object.keys(cart[0])
    price = cart[0][name]
    cartString = cartString.concat(` ${name} at $${price}.`)
  } else /*cart has 2 or more items */{
    for (let i = 0; i < cart.length; i++) {
      name = Object.keys(cart[i])
      price = cart[i][name]
      if ((cart.length === 2) && (i === 0)) {
        cartString = cartString.concat(` ${name} at $${price}`)
      } else if (i < cart.length - 1) {
        cartString = cartString.concat(` ${name} at $${price},`)
      } else if ((i + 1) === cart.length) {
        cartString = cartString.concat(` and ${name} at $${price}.`)
      }
    }
  }
  console.log(cartString)
}

function total() {
  var total = 0
  var name
  var price

  for (let i = 0; i < cart.length; i++) {
    name = Object.keys(cart[i])
    price = cart[i][name]

    total += price
  }
  return total
}


function removeFromCart(item) {
  var name
  var found = false
  // iterate through cart
  for (let i = 0; i < cart.length; i++) {

    name = cart[i]

    if (name.hasOwnProperty(item)) {
      cart.splice(i, 1)
      found = true
    }
  }

  if (!found) {
    console.log("That item is not in your cart.")
  }
  return cart
  }

function placeOrder(cardNumber) {
  var totalCost = total()

  if (cardNumber === undefined) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
    //clear cart
    cart = []

  }
}
