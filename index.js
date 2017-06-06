var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  var t = ""

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
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: [price]})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
    return
  }

  var str = "In your cart, you have"
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      str = str + ` ${item} at $${cart[i][item]}`
      str = str + (i < l-1 ? "," : ".");
    }
  }
  console.log(str)
}

function removeFromCart(deleteItem) {
  for (var i = 0, l = cart.length; i < l; i++){
    for (var item in cart[i]) {
      if (item === deleteItem) {
        cart.splice(i, 1);
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
    return
  }
  var price = total()
  cart = []
  console.log(`Your total cost is $${price}, which will be charged to the card ${creditCard}.`)
}
