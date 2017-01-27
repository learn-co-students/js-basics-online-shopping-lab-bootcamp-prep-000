var cart = [];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length <= 0) {
    console.log("Your shopping cart is empty.")
  }
  const prints = []
  for(let i = 0; i < cart.length; i++) {
    let print = cart[i]
    let item = Object.keys(print)[0]
    let price = print[item]

    console.log(`${item} at ${price}`)
    prints.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${prints.join(', ')}.`)
}

function removeFromCart(name) {
  for (let i = 0; i < cart.length; i++) {
    if(Object.keys(cart[i])[0] === name) {
      cart.splice(i, 1)
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(n) {
  if(n == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${n}.`)
    cart = []
  }
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
