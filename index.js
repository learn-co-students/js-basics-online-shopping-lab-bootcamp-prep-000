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

function addToCart(item) {
  var price = Math.floor(Math.random()*100)

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var items = ""
    var y = cart.length - 1
    for (var i=0; i < cart.length - 1; i++) {
      for (var itemName in cart[i]) {
        items += ` ${itemName} at $${cart[i][itemName]},`
      }
    }
    for (var itemName in cart[y] ) {
        items +=` ${itemName} at $${cart[y][itemName]}.`
      }
    console.log("In your cart, you have" + items )
  }
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var itemName in cart[i]) {
      if (cart[i].hasOwnProperty(item)) {
        cart.splice(i,1)
        return cart
      }
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var totalCost = total()
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
}
