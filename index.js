var cart;

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
  var price
  var obj = {}
  price = Math.floor(Math.random()*100)
  obj[item] = price
  cart.push(obj)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var i
  var output = "In your cart, you have "
  var objName
  if( cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    for(i = 0; i < cart.length; i++) {
      objName = Object.keys(cart[i])
      output += objName + ` at $${cart[i][objName]}`
      if( i < cart.length - 1) {
        output += ", "
      }
    }
    console.log(output + ".")
  }
}

function removeFromCart(item) {
  var i
  var inCart = -1
  var objName
  //Is it in the cart?
  for( i = 0; i < cart.length; i++ ) {
    if(cart[i].hasOwnProperty(item)){
      inCart = i
    }
  }
  if( inCart >= 0) {
    cart.splice(inCart, 1)
    return cart
  } else {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
  //             We don\'t have a credit card on file for you to place your order.' ]
    console.log("We don\'t have a credit card on file for you to place your order.")
  } else {
//              'Your total cost is $49,         which will be charged to the card 123.
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
