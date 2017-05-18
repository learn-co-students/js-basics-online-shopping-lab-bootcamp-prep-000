var cart;
cart = Array();

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
  return cart;
}

function addToCart (item) {
  var price = Math.floor(100*Math.random())
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return
  } else {
    var temp = "In your cart, you have"

    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        temp = `${temp} ${[item]} at \$${cart[i][item]},`
      }
    }
    temp = temp.slice(0, -1);
    console.log(`${temp}.`)
  }
    return cart
}

function removeFromCart (item) {
  cart.pop()
  if (cart.hasOwnProperty([item])) {


//    var index = cart.indexOf(item);
//    if (index > -1) {
//      cart.splice(index,1)
    return cart;
  } else {
    console.log("That item is not in your cart.")
    return
  }
}

function placeOrder (ccNum) {
  if (ccNum === undefined) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`)
    cart = []
  }
}
