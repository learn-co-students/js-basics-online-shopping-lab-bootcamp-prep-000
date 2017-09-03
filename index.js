var cart = [];

function randomPrice() {
  return Math.floor((Math.random() * 100) + 1)
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemArray = {}
  itemArray[item] = randomPrice()
  cart.push(itemArray)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var l = cart.length;
  if (l === 0) {
    console.log("Your shopping cart is empty.")

  } else if (l === 1) {
    var first = `${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`
    console.log(`In your cart, you have ${first}`)

  } if (l === 2) {
    var first = `${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`
    var second = `${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}`
    console.log(`In your cart, you have ${first} and ${second}.`)

  } if (l > 2) {
    var cartArray = []
    for (let i = 0; l > i; i++) {
      var itemString = `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`
      cartArray.push(itemString)
    }
    cartArray[cartArray.length - 1] = 'and ' + cartArray[cartArray.length - 1]
    var cartString = cartArray.join(", ")
    console.log(`In your cart, you have ${cartString}.`)
  }
}

function total() {
  var l = cart.length
  var totalPrices = 0
  for (let i = 0; l > i; i++) {
    var price = cart[i][Object.keys(cart[i])[0]]
    totalPrices = price + totalPrices
  }
  return totalPrices
}

function removeFromCart(item) {
  var l = cart.length
  var isIt = false

  for (let i = 0; l > i; i++) {
    if (cart[i].hasOwnProperty(item) === true) {
      isIt = true
      cart.splice(i, 1)
      return cart
    }
  }
  if (isIt === false) {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  var cost = total();
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
