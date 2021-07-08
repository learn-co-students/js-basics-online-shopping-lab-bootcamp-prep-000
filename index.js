var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  var newItem = { [item] : price }
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.')
    return
  }

  var youHave = 'In your cart, you have '
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      youHave += `${item} at $${cart[i][item]}`
      if(cart.length === 2 && i !== 1) {
        youHave += ' and '
      } else if(i < cart.length - 2) {
        youHave += ', '
      } else if(i === cart.length - 2){
        youHave += ', and '
      }
    }
    console.log(`${youHave}.`)
  }
  return cart
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++) {
    for(var item in cart[i]) {
      total += cart[i][item]
    }
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
