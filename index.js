var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let totalCost = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      totalCost += getCart()[i][item]
    }
  }
  return totalCost
}

function getCart() {
  return cart
}

function addToCart(item) {
  var myItem = item
  var price = Math.floor(Math.random() * 100)
  cart.push({[myItem]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var statement = "In your cart, you have "
    //var test = {"socks": 1, "puppy": 2, "iphone": 3}

    for (var i = 0; i < cart.length; i++) {
      var itemName = Object.keys(getCart()[i])
      var price = getCart()[i][itemName]

      if(i === cart.length - 1) {
        statement+= `${itemName} at $${price}.`
      }
      else {
        statement+= `${itemName} at $${price}, `
      }
    }
    console.log(statement)
  }
}

function removeFromCart(item) {
  if (!cart.hasOwnProperty(item)) {
    console.log("That item is not in your cart.")
  }

  for (var i = 0; i < cart.length; i++) {
    if (Object.keys(getCart()[i] === [item])) {
      cart.splice(i, 1)
      return cart
    }
  }//end for
  return cart
} //end method

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart.splice(0, cart.length)
}
