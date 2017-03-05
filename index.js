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

function addToCart(purchaseItem) {
  var price = Math.floor(Math.random() * 100 + 1);

  console.log(`${purchaseItem} has been added to your cart.`)

  cart.push({ [purchaseItem]: price});

  return cart
}

function viewCart() {
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemsAndPrices = cart[i]
    let item = Object.keys(itemsAndPrices)[0]
    let price = itemsAndPrices[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(creditCardNum) {
  if (Number.isInteger(creditCardNum)) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCardNum}.`)
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }

  cart = []
}
