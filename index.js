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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var i = 0
    var cartList = "In your cart, you have "
    for (var i = 0; i < cart.length - 1; i++) {
      var cartList = cartList + Object.keys(cart[i]) + " at $" + cart[i][Object.keys(cart[i])] + ", "
    }
    var cartList = cartList + Object.keys(cart[cart.length - 1]) + " at $" + cart[cart.length - 1][Object.keys(cart[cart.length - 1])] + "."
    console.log(cartList)
  }
}


function removeFromCart(item) {
  var i = 0
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      var index = cart.indexOf(item)
      cart.splice(index, 1)
      return cart
    }
  }
    console.log("That item is not in your cart.")
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    var finalCost = 0
    for (var i = 0; i < cart.length; i++) {
      var finalCost = finalCost + cart[i][Object.keys(cart[i])]
    }
    cart = [];
    console.log("Your total cost is $" + finalCost + ", which will be charged to the card " + cardNumber + ".")
  }
}
