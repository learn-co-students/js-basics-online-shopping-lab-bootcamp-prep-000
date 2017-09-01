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

var cartArray = []
function viewCart() {
  var l = cart.length;
  if (l === 0) {
    console.log("Your shopping cart is empty.")

  } if (l === 1) {
    var first = `${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])]}.`
    console.log(`In your cart, you have ${first}`)

  } if (l === 2) {
    var first = `${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])]}`
    var second = `${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])]}`
    console.log(`In your cart, you have ${first} and ${second}.`)

  } if (l > 2) {
    for (let i = 0; l - 1 > i; i++) {
      var itemString = `${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])]}`
      cartArray.push(itemString)
    }

    var last = `${Object.keys(cart[l - 1])[0]} at $${cart[l - 1][Object.keys(cart[l - 1])]}.`
    var cartString = cartArray.join(", ")
    console.log(`In your cart, you have ${cartString} and ${last}`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
