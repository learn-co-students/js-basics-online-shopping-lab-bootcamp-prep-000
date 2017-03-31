var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) { // item 'pizza'
  var price = Math.floor(Math.random() * 100) // gives you a random number between 1 - 100
  cart.push({[item]:price}) // the brackets make your key the value of what's in []
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  }

    const itemsAndPrices = []

    for (let i = 0, l = cart.length; i < l; i++) {
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)
      let price = itemAndPrice[item]

      itemsAndPrices.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
    if (!itemInCart) {
      console.log("That item is not in your cart.")
    }
  return cart;
  }

function placeOrder(cardNumber) {

  if (!cardNumber) {
    return console.log("We don\'t have a credit card on file for you to place your order.")
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

    cart = []
}

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
