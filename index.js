var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
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

function addToCart(item) {
  var price = Math.floor(100.0*Math.random())
  var newRow = {}
  newRow[item]=price
  cart.push(newRow )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var string = "Your shopping cart is empty."
  if (cart.length > 0) {
    string = "In your cart, you have "
    for (var thisItem in cart) {
      for (var name in cart[thisItem]) {
      string += `${name} at $${cart[thisItem][name]}`
      }
      if(thisItem < cart.length-1) {
        string += ", "
      } else {
        string += "."
      }

    }
  }
  console.log(string)
  return string
}


function removeFromCart(itemToRemove) {
  var itemRemoved = false

  for (var item in cart) {
  if ( cart[item].hasOwnProperty(itemToRemove) ) {
    cart.splice(item,1)
    itemRemoved = true
  }
}

  if (itemRemoved) {
    return cart
  } else {
    console.log("That item is not in your cart.")
    return "That item is not in your cart."
  }
}


function placeOrder(cardNumber) {
if(!cardNumber) {
  console.log("We don't have a credit card on file for you to place your order.")
return
} else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  return cart
}
}
