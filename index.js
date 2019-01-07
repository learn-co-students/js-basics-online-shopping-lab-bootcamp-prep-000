var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartItem = {}
  cartItem[item] = Math.floor((Math.random() * 100) + 1)
  cart.push(cartItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length == 0){
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length == 1) {
    var cartItem = cart[0]
    var itemName = Object.keys(cartItem)[0]
    var itemPrice = cartItem[itemName]
    console.log(`In your cart, you have ${itemName} at $${itemPrice}.`)
  }
  else if (cart.length == 2) {
    var cartItem = cart[0]
    var itemName = Object.keys(cartItem)[0]
    var itemPrice = cartItem[itemName]
    var cartItem2 = cart[1]
    var itemName2 = Object.keys(cartItem2)[0]
    var itemPrice2 = cartItem2[itemName2]
    console.log(`In your cart, you have ${itemName} at $${itemPrice} and ${itemName2} at $${itemPrice2}.`)

  }
  else {
    var cartItems = ""
    for(var i = 0; i < cart.length; i++) {
      var cartItem = cart[i]
      var itemName = Object.keys(cartItem)[0]
      var itemPrice = cartItem[itemName]
      cartItems += `${itemName} at $${itemPrice}`
      if (i < cart.length - 2) {
        cartItems += ", "
      }
      else if(i == cart.length - 2) {
        cartItems += ", and "
      }
    }
    console.log(`In your cart, you have ${cartItems}.`)
  }
  return cart
}

function total() {
  var total = 0
  for(var i = 0; i < cart.length; i++) {
    var item = cart[i]
    var key = Object.keys(item)[0]
    var price = item[key]
    total += price
  }
  return total
}

function removeFromCart(item) {
  var itemFound = false
  for(var i = 0; i < cart.length; i++) {
    var cartItem = cart[i]
    var key = Object.keys(cartItem)[0]
    if(key == item) {
       cart.splice(i, 1)
      itemFound = true
    }
  }
  if(itemFound) {
    return cart
  }
  else {
    console.log("That item is not in your cart.")
    return cart
  }
}

function placeOrder(cardNumber) {
  if ( typeof cardNumber === 'undefined') {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    var totalCost = total()
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
