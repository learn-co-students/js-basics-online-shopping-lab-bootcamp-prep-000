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

function addToCart (item) {

  var price = Math.floor(Math.random()*100)
  cart.push({ [item]: price})

  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

  if (Object.keys(cart).length < 1) {
    console.log("Your shopping cart is empty.")

  } else {
    var str = []
    var i = 0;
    for (var cartItem in cart) {
		var x = cart[cartItem]
		//console.log(x)
		//console.log(`${x.orange}`)
		var y = Object.keys(x)
		//console.log(y)
		var z = y[0]
		//console.log(z)
		//console.log(`${y[0]}`)

		str[i] = ` ${y} at $${x[z]}`
      i++;

    }
    console.log(`In your cart, you have${str}.`)

  }
}

function removeFromCart (item) {
    var i = 0;
    for (i; i < cart.length ; i++) {

      if (cart[i].hasOwnProperty(item) === true) {
        cart.splice (i,1)
        return cart
    }}
     if (i === cart.length) {

      console.log("That item is not in your cart.")

  }
}



function placeOrder (cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
    return
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.length = 0
    return
  }
}
