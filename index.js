var cart = []

function getCart() {
  return cart
}

function addToCart(item){
  var price = Math.random()
  price = Math.floor(price)
  var cartItemPrice = {}
  cartItemPrice[item] = price
  cart.push(cartItemPrice)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var result = []
  if (cart.length === 0) {
    return console.log("Your shopping cart is empty.")
  }
for (var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i]
    var item = Object.keys(itemAndPrice)[0]
    var price = itemAndPrice[item]
    result.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${result.join(', ')}.`)
}

function removeFromCart(item){

  for (var i = 0; i < cart.length; i++){
    if (Object.keys(cart[i]).toString() === item) {
      cart = cart.slice(0,i).concat(cart.slice(i+1))
      return cart
    }
    }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){

  var total = 0
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    for (var i = 0; i < cart.length; i++){
      var itemAndPrice = cart[i]
      var item = Object.keys(itemAndPrice)[0]
      var price = itemAndPrice[item]
      total = total + price
      cart = []
    }
    console.log(`Your total cost is \$${total}, which will be charged to the card ${cardNumber}.`)
  }
}

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
