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
  cart.push({[item]: Math.floor(Math.random() * 100) + 1})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length > 0) {
    var output = []
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        output.push(`${item} at $${cart[i][item]}`)
      }
    }
    console.log(`In your cart, you have ${output.join(", ")}.`)
  } else {
    console.log("Your shopping cart is empty.")
  }
}


function removeFromCart(item) {
  if(cart.length == 0) {
    console.log('That item is not in your cart.')
  }
  for (var i = 0; (i < cart.length && cart.length != 0); i++) {
    if (cart[i].hasOwnProperty(item) == true) {
      cart.splice(i, i + 1)
    }
  }
}

function placeOrder(cc_num=null) {
  if(cc_num == null) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc_num}.`)
    cart = []
  }

}
