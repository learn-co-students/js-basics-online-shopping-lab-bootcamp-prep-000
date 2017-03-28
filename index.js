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
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`);
  return cart
}
function viewCart() {
  if (cart.length>0) {
    var arr = []
    for (var i = 0; i < cart.length; i++) {
      arr.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`)
    }
    console.log(`In your cart, you have ${arr.join(', ')}.`)
  } else {
    console.log('Your shopping cart is empty.')
  }
}
function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(name)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}
function placeOrder(ccn) {
  if (ccn) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccn}.`);
    cart = []
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
