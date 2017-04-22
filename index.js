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
  var price = Math.floor(Math.random() * 100);

  cart.push({[item]: price});

  console.log(`${item} has been added to your cart.`);

  return cart
}

function viewCart () {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var key = Object.keys(cart[0])
    var script = `In your cart, you have ${key[0]} at $${cart[0][key]}`;
    for (var n = 1; n < cart.length ; n++) {
      var key = Object.keys(cart[n])
      script = script + `, ${key[0]} at $${cart[n][key]}`;
    }
    script = script + '.'
    console.log(script);
  }
}

function removeFromCart(item) {
  for (var n = 0; n < cart.length; n++) {
    if (cart[n].hasOwnProperty([item]) === true) {
      cart.splice(n,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0)
  }
}
