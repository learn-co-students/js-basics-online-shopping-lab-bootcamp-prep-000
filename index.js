var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function getCart() {
  return cart
}

function addToCart(purchase) {
  const price = Math.floor(Math.random() * 100)
  cart.push({[purchase]:price})
  console.log(`${purchase} has been added to your cart.`)
  return cart
}

function viewCart() {
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndCart = cart[i]
    let item = Object.keys(itemAndCart)[0]
    let price = itemAndCart[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0,i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(creditCard) {
  if (!creditCard) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  else {


  console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)

  cart = []
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
