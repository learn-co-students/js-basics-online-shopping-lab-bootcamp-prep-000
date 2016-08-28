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
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var output = "In your cart, you have "
    for (var i = 0, l = cart.length; i < l; i++) {
      if(i === 0){
      }else {
        output = output + ", "
      }
      for (var item in cart[i]) {
        output = output + `${item} at $${cart[i][item]}`
      }
    }
    output = output + "."
    console.log(output)
  }
}

function removeFromCart(item) {
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var part in cart[i]) {
      if(item === part) {
        cart.splice(i, 1)
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(card) {
  if(card === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`)
    cart = []
  }
}
