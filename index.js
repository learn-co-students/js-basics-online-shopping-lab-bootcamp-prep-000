var cart= [];

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
  var price = Math.random() * 100
  price = Math.floor(price)
  var kart = getCart()
  kart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return kart
}

function removeFromCart(name) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(name)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    return cart = []
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }

}

function viewCart() {
if (cart.length > 0) {
  var sentence = `In your cart, you have `
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
        sentence += `${item} at $${cart[i][item]}, `
    }
  }
  sentence = sentence.slice(0,-2) + "."
  return console.log(sentence);
} else {
  console.log("Your shopping cart is empty.");
}
}
