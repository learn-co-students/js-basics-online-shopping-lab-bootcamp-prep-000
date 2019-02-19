var cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  let statementArray = []
  let i = 0, l = cart.length
  while(i<l) {
  var item = Object.keys(cart[i])[0]
  var price = cart[i][item]
  statementArray.push(item +" at $" + price);
  i++
  }
  console.log(`In your cart, you have ${statementArray.join(', ')}.`)
}


function addToCart(item) {
  var price = Math.round(Math.random()*100);
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)

return getCart()
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

function removeFromCart(item) {
  var inCart = false
  for (var n = 0, l = cart.length; n<l; n++) {
    if (cart[n].hasOwnProperty(item)){
      inCart = true
      cart.shift(item)
    }
  }
  if (!inCart) {
    console.log("That item is not in your cart.")
  }
  return cart
  }

  function placeOrder(creditCard) {
    if (creditCard === undefined) {
      console.log("We don't have a credit card on file for you to place your order.");
    }
    if (creditCard !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)

    }
    cart = []
  }