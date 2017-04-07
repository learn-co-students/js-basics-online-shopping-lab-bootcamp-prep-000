var cart = []

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

function getCart () {
  return cart
}

function addToCart(item) {
var propertyName = item
var price = Math.ceil(Math.random() * 100)
var obj = {[propertyName]:price}
cart.push(obj)
console.log(propertyName + " has been added to your cart.")
return cart
}

function viewCart() {
  var output = ""
  var key
  getCart ()
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i += 1) {
      for (key in cart[i]) {
        if (cart[i].hasOwnProperty(key)) {
          var output = output + (key + " at $" + cart[i][key]) + ", "
        }
      }
    }
    var finalOutput = output.slice(0, -2)
    console.log("In your cart, you have " + finalOutput + ".")
  } else {
      console.log("Your shopping cart is empty.")
    }
}

function removeFromCart(item) {
  var propertyName = item
  var key
  getCart ()
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i +=1) {
      for (key in cart[i]) {
        if (cart[i].hasOwnProperty(key)) {
          if (key === propertyName) {
            cart.splice(i, 1)
            break
          }
        }
      }
    return cart
    }
  } else {
     console.log("That item is not in your cart.")
  }
}

function placeOrder (cardNumber) {
  if (cardNumber != undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
      console.log("We don't have a credit card on file for you to place your order.")
  }
}
