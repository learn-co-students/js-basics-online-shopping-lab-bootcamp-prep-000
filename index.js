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
  var price = Math.floor(Math.random()*100)
  cart.push({[item]: price})
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var itemPricePairs = []
    for (var item in cart) {
      itemPricePairs.push(" " + Object.keys(cart[item]) + " at $"+ cart[item][Object.keys(cart[item])])
    }
    console.log("In your cart, you have" + itemPricePairs + ".")
  }
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i)
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(creditCard) {
  if (creditCard === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card 123.")
    cart = []
    return cart
  }
}
