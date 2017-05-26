var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  var sale = {}
  var price = Math.floor(Math.random() * 100)
  sale[item] = price
  cart.push(sale)
  console.log(item + ' has been added to your cart.')
  return cart
}

function viewCart() {
  var contents = ''
  if (cart.length > 0) {
    contents = 'In your cart, you have '
    var items = []
    for(var i = 0; i < cart.length; i++) {
      var item = cart[i]
      for (var ind in item) {
        items.push(ind + ' at $' + item[ind])
      }
    }
    contents += items.join(", ") + "."
  } else {
    contents = 'Your shopping cart is empty.'
  }
  console.log(contents)
}

function removeFromCart(name) {
  var result = ''
  if(cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if(cart[i].hasOwnProperty(name)) {
        cart.splice(i, 1)
      } else {
        console.log('That item is not in your cart.')
      }
    }
  } else {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
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
