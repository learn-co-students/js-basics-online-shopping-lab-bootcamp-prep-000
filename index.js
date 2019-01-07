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
 var price = Math.floor(Math.random() * 100)
 var newItem = {[item]: price}
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart

}

function viewCart() {
  // write your code here
  var cartView = "In your cart, you have"
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")

  } if (cart.length == 1) {
    var obj = cart[0]
    var objKey = Object.keys(cart[0])
    console.log(cartView + ` ${objKey} at $${obj[objKey]}.`)

  } else {
    for (var i = 0; i < cart.length; i++) {
      var obj = cart[i]
      var objKey = Object.keys(cart[i])
      if (i + 1 === cart.length) {
        cartView = cartView + ` and ${objKey} at $${obj[objKey]}.`
        console.log(cartView)
      } if(cart.length != 2) {
        cartView = cartView + ` ${objKey} at $${obj[objKey]},`

      } else {
        cartView = cartView + ` ${objKey} at $${obj[objKey]}`
      }
    }
  }
 }

function total() {
  // write your code here
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i]
    var objKey = Object.keys(cart[i])
    var price = parseInt(obj[objKey])
    totalPrice += price

  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  if (cart.length === 0) {
    console.log("That item is not in your cart.")
    return cart
  } else {
    for (var i = 0; i < cart.length; i++) {
      var obj = cart[i]
       if (obj.hasOwnProperty(item) === true) {
         cart.splice(i, 1)
         return cart

       }

    }
    console.log("That item is not in your cart.")
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined || cardNumber === null || typeof cardNumber === "string") {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var totalPrice = total()
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.` )
    cart = []
  }
}
