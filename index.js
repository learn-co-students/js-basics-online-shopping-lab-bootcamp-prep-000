var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push({[itemName] : (Math.floor(Math.random() * 100) + 1)})
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  // It feels like this function has too much code! There must be a way to refactor. Getting around the grammar is tough.
  var string = "In your cart, you have "
  if (cart.length === 0) {
     string = "Your shopping cart is empty."
  } else if (cart.length === 1) {
      string = string + `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  } else if (cart.length === 2) {
      string = string + `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
  } else {
    for (var i = 0; i < cart.length - 1; i++) {
      string = string + `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
    }
    string = string + `and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
  }
  console.log(string)
}

function total() {
  var price = 0
  for (var i = 0; i < cart.length; i++) {
    price = price + cart[i][Object.keys(cart[i])]
  }
  return price
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart = [...cart.slice(0, i), ...cart.slice(i + 1)]
      return cart
    }
  }
  return console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (Number.isInteger(cardNumber)) {
    console.log(`Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
