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
}

function viewCart() {
  // write your code here
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

function getCart() {
  return cart
}

function getRandomPrice() {
  var min = 0
  var max = 100
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  var price = getRandomPrice()

  cart.push({[item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var itemList = []
    for (let i = 0; i < cart.length; i++) {
      var object = cart[i]
      var key = Object.keys(cart[i])
      var itemPrice = object[key]
      itemList.push(`${key} at $${itemPrice}`)
    }
    console.log(`In your cart, you have ${itemList.join(", ")}.`)
  }
}



function removeFromCart(item) {
  var itemInCart = false

  if (itemInCart === false) {
    console.log('That item is not in your cart.')
  }

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i)
      return cart
    }
  }
}


function placeOrder(creditCard) {
  if (!creditCard) {
    console.log("We don\'t have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
    cart = []
  }
}
