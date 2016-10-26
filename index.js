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
  var p = Math.floor(Math.random()*100)
  cart.push({[item]: p})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length>0) {
    var str = "In your cart, you have "
    for(var i=0; i < cart.length; i++) {
      for(var item in cart[i]) {
        str += item + " at $" + cart[i][item] + `${i===cart.length-1 ? "." : ", "}`
      }
    }
    console.log(str)
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(name) {
  var b = false
  for(let i = 0; i<cart.length; i++) {
    if(cart[i].hasOwnProperty(name)) {
      b = true
      cart.splice(i, 1)
      return(cart)
    }
  }
  if (!b) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(num) {
  if(num != undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
    cart = []
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
