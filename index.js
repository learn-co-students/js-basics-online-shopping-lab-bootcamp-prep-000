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
};

function addToCart(item) {
  cart.push({[item]:`${Math.floor(Math.random() * 100)}`})
  console.log(`${item} has been added to your cart.`);
  return cart
};

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else {
    var current = "In your cart, you have"
    for (var i = 0; i < cart.length; i++) {
      var current = current + ` ${Object.keys(cart[i])} at $${cart[i][`${Object.keys(cart[i])}`]},`
    }
      console.log(`${current.slice(0,-1)}.`)
  }
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1)
  } else {
    console.log("That item is not in your cart.")
  }
}
  return cart
}

function placeOrder(cardNumber) {
  if (`${cardNumber}` === "undefined") {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
};