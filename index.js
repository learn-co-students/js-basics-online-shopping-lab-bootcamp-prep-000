var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random()*100)+1})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  let itemsWithCosts = cart.map(item => {
    return `${Object.keys(item)[0]} at $${item[Object.keys(item)[0]]}`
  })
  let lastItemAndCost = itemsWithCosts.pop()
  let commaSeparatedItemsWithCosts = itemsWithCosts.join(", ")
  let cartStatement = ""
  if (cart.length > 2) {
    commaSeparatedItemsWithCosts = commaSeparatedItemsWithCosts + ","
    cartStatement = "In your cart, you have " + commaSeparatedItemsWithCosts + " and " + lastItemAndCost + "."
  }
  else if (cart.length == 2) {
    cartStatement = "In your cart, you have " + commaSeparatedItemsWithCosts + " and " + lastItemAndCost + "."
  }
  if (cart.length == 1) {
    cartStatement = "In your cart, you have " + lastItemAndCost + "."
  }
  else if (cart.length == 0) {
    cartStatement = "Your shopping cart is empty."
  }
  console.log(cartStatement)
}

function total() {
  const costs = cart.map(item => {return item[Object.keys(item)[0]]})
  return costs.reduce((i,j) => i + j)
}

function removeFromCart(item) {
  const itemNames = cart.map(item => {return Object.keys(item)[0]})
  const locInCart = itemNames.indexOf(item)
  if (locInCart < 0) {
    return cart
  }
  else {
    cart.splice(locInCart, 1)
    return cart
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}