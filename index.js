var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor((Math.random() * 100) + 1)
 cart.push({ [item]: itemPrice })
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var cartString
  if (cart.length === 0) {
    var cartString = "Your shopping cart is empty."
  } else if (cart.length === 1) {
      var cart0 = cart[0]
      var cart0Key = Object.keys(cart0)
      var cartString = "In your cart, you have " + cart0Key + " at $" + cart0[cart0Key] + "."
  } else if (cart.length === 2) {
      var cart0 = cart[0]
      var cart0Key = Object.keys(cart0)
      var cart1 = cart[1]
      var cart1Key = Object.keys(cart1)
      var cartString = "In your cart, you have " + cart0Key + " at $" + cart0[cart0Key] + " and " + cart1Key + " at $" + cart1[cart1Key] + "."
  } else {
      var itemsAndPrices = []
      for (var i = 0; i < cart.length - 1; i++) {
        var carti = cart[i]
        var cartiKey = Object.keys(cart[i])
        itemsAndPrices.push(`${cartiKey} at $${carti[cartiKey]}`)
      }
      var cartLast = cart[cart.length - 1]
      var cartLastKey = Object.keys(cartLast)
      var cartString = `In your cart, you have ${itemsAndPrices.join(', ')}, and ${cartLastKey} at $${cartLast[cartLastKey]}.`
  }
  console.log(`${cartString}`)
}

function total() {
  var cartPriceTotal = 0
  for (var i = 0; i < cart.length; i++) {
    var carti = cart[i]
    var cartiValue = carti[Object.keys(cart[i])]
    cartPriceTotal += cartiValue
  }
  return cartPriceTotal
}

function removeFromCart(item) {
  var itemInList = 0
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
    var itemInList = 1
    cart.splice(i, 1)
    }
  }
  if (itemInList === 0) {
  console.log("That item is not in your cart.")
} else {
  console.log(cart)
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
  console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
