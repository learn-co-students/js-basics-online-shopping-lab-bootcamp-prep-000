var cart = [];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 6) + 1
  cart.push({ [item] : price })
  console.log(`${item} has been added to your cart.`)
  return getCart()
}

function viewCart() {
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var newArray = []
    for (var i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        newArray.push(` ${item} at $${cart[i][item]}`)
      }
    }
    console.log(`In your cart, you have${newArray}.`)
  }
}

function removeFromCart(itemToRemove) {
  for (var i = 0; i < cart.length; i++) {
    for (var itemToMatch in cart[i]) {
      if(itemToMatch === itemToRemove) {
        cart.splice(i, 1)
        return cart
      }
    }
  }
  return console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  for (var i = 0; i < cart.length; i++) {
    cart.pop()
    return cart
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
