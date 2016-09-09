var cart = [];

function addToCart(item) {
  cart.push( {[item]: Math.floor(Math.random() * 100)} )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function getCart() {
  return cart
}

function viewCart() {
  if (!cart.length) {
    console.log(`Your shopping cart is empty.`)
    return
  }

  const itemsAndPrices = []

  for (let i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      itemsAndPrices.push(`${item} at $${cart[i][item]}`)
    }
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
  return
};

function removeFromCart(name) {

  var itemInCart = false
  console.log(`itemInCart is ${itemInCart} before for loops`) // debugging
  for (let j = 0, len = cart.length; j < len; j++) {
    if (cart[j].hasOwnProperty(name)) {
      itemInCart = true
      console.log(`itemInCart is ${itemInCart} when hasOwnProperty is true`) // debugging
    }

  }
  if (itemInCart === false) {
    console.log("That item is not in your cart.")
    console.log(`itemInCart is ${itemInCart} after the full running of the first for loop`) // debugging
  }

  for (let i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      if (item === name) {
        cart = [...cart.slice(0,i), ...cart.slice(i+1)]
      }
    }
  }

  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) { // is this inner for loop really looping, or just picking up one item per increment of i?
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`We don\'t have a credit card on file for you to place your order.`)
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = []
};
