var cart = []

function getCart() {
  return cart
};

function addToCart(item) {
  var obj = {[item]: Math.floor(Math.random()*100)}
  cart.push(obj)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var output = `In your cart, you have `
  if(!cart.length) {
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0; i < cart.length ; i++) {
    var item = cart[i]
    var keys = Object.keys(cart[i])
      for(var j=0 ;j<Object.keys(cart[i]).length ; j++) {
        if(i===Object.keys(cart).length-1) {
          output += `${keys} at $${item[keys]}.`
        } else {
          output += `${keys} at $${item[keys]}, `
        }
      }
      // for (var keys in item) {
      // output += `${keys} at $${item[keys]}, `
      // }
    }
  }
  console.log(output)
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i][item]) {
      cart.splice(i, 1)
      // console.log(cart)
      return
    }
  }
  console.log('That item is not in your cart.')
  // console.log(cart)
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}

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
