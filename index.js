var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
    return cart
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

function addToCart(item) {
  let obj = {}

  obj[item] = Math.floor(Math.random() * 100)
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  if (cart.length == 0) return console.log("Your shopping cart is empty.")

  let result = cart.map((item, i) => {
    return `${Object.keys(item)} at $${item[Object.keys(item)]}`
  })

  console.log(`In your cart, you have ${result.join(', ')}.`);
}

function removeFromCart(name) {
  cart.forEach((item, index) => {
    if (item.hasOwnProperty(name)){
      cart.splice(index, 1)
      return;
    }
  })
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber == null){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
