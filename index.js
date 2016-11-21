var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
  var itemName = item
  var price = Math.floor(Math.random()*100)
  cart.push({[itemName]: price})
  console.log(`${itemName} has been added to your cart.`)
  return getCart()
}

function viewCart() {
  var viewSummary = []
  if (cart.length < 1) {
    console.log("Your shopping cart is empty.");
  } else {
    for (var i = 0, l = cart.length; i < l; i++) {
        for (var item in cart[i]) {
          viewSummary.push(` ${item} at $${cart[i][item]}`);
      }
    }
  }
  console.log("In your cart, you have" + viewSummary.toString() + ".")
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let totalCost = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      totalCost += cart[i][item]
    }
  }

  return totalCost
}

function removeFromCart(itemToRemove) {
    for (var i = 0, l = cart.length; i < l; i++) {   // looping through array
      for (var item in cart[i]) {    // looping through object keys
        if (cart[i].hasOwnProperty(itemToRemove) === true) {
          cart.splice(i, 1)
          return getCart()
        } else {}
      }
    }
  return console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("We don\'t have a credit card on file for you to place your order.")
  } else {
    var finalCost = total()
    console.log(`Your total cost is $${finalCost}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0)
    return getCart()
  }
}
