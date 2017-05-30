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

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*101)
  cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
 }
 addToCart("beer");


 function viewCart() {
 if (!cart.length) {
    return console.log('Your shopping cart is empty.')
 }
  var itemsAndPrices = []
 for (var i = 0; i < cart.length; i++) {
    var itemsAndPrice = cart[i]
    var item = Object.keys(itemsAndPrice)[0]
    var price = itemsAndPrice[item]
    itemsAndPrices.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
 }

 function total() {
 var total = 0
 for (var i = 0, length = cart.length; i < length; i++) {
    for (var item in cart[i]) {
      total += cart[i][item]
    }
  }
  return total
 }

 function removeFromCart(item) {
  var itemInCart = false
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
     cart = cart.slice(0, i)
    }
  }
  if (!itemInCart) {
    console.log('That item is not in your cart.')
  }
  return cart
 }
 removeFromCart("beer")

 function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
placeOrder(123-456-789)
