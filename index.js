var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length ; i < l; i++) {
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
  cart.push({[item]: Math.floor(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var items = Object.keys(cart);
    var intro = "In your cart, you have"
    for (var i = 0, l = items.length; i < l; i++) {
      console.log(intro + `${cart[i]} at ${items[i]}`)
    }
  }
}

function removeFromCart (item) {
  if ( cart.hasOwnProperty(item) === false ) {
    console.log("That item is not in your cart.")
  } else {
    delete cart[item];
    console.log(cart)
  }
}

function placeOrder (cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
   return cart = []
}
