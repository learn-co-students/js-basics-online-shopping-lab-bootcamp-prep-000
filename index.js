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
  var price = Math.floor(Math.random())
  cart.push({ item: price })
  console.log(item + " has been added to your cart.")
  getCart()
}

function viewCart() {
  if (cart = []) {
    console.log("Your shopping cart is empty.")
  }
  else {
    for (let i = 0; i < cart.length; i++) {
      console.log("In your cart, you have " + Object.keys(cart[i]) + ".")
    }
  }
}

function removeFromCart(item) {
  cart.hasOwnProperty(item)

  getCart()
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card 123.")
    setCart()
  }
}
