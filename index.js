var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}

function addToCart(item) {
  var price = getRandomInt(1, 101)
  var addedItem = {}
  addedItem[item] = price
  cart.push(addedItem)
  console.log(`${Object.keys(addedItem)} has been added to your cart.`)
  return cart
}

function stringify(cartName, index){
  return `${Object.keys(cartName[index])} at $${cartName[index][Object.keys(cartName[index])[0]]}`
}

function viewCart() {
  var start = "In your cart, you have"
  var output = start
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length == 1) {
    console.log(start + ` ${stringify(cart, 0)}` + ".")
  } else if (cart.length == 2) {
    console.log(start + ` ${stringify(cart, 0)} and ${stringify(cart, 1)}` + ".")
  } else if (cart.length > 2) {
    for(let i = 0; i < cart.length-1; i++){
      output += (` ${stringify(cart, i)},`)
    }
    console.log(`${output} and ${stringify(cart, cart.length - 1)}.`)
  }
}

function total() {
  var prices = []
  for (let i = 0; i < cart.length; i++){
    prices.push(cart[i][Object.keys(cart[i])[0]])
  }
  return prices.reduce((a, b) => a + b)
}

function removeFromCart(item) {
  var presence = false
  for (let i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)) {
      presence = true
      cart.splice(i, 1)
    }
  }
  if (!presence){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
