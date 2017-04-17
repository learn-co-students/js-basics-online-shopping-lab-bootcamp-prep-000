var cart = []

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var obj = {}
  obj[item] = `${price}`
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    var string = "In your cart, you have "
    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])
      string = string + item + " at $" + cart[i][item]
      if (i < cart.length - 1) {
        string = string + ", "
      }
    }
    string = string + "."
    console.log(string)
  }
}

function removeFromCart(item) {
  var match = "N"
    for (let i = 0; i < cart.length; i ++) {
      if (cart[i].hasOwnProperty(item) === true) {
          cart.splice(i, 1)
          match = "Y"
        }
      }
    if (match === "N") {
      console.log("That item is not in your cart.")
    }
  return cart
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return parseInt(t, 10)
}

function placeOrder(cc) {
  if (arguments.length === 0) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
  }
  cart = []
}

