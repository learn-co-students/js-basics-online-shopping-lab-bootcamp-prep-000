var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 10) + 1)
  cart.push({ [item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }

  var itemsAndPrices = []
  for (var i = 0; i < cart.length; i++) {
    var index = cart[i]
    var item = Object.keys(index)[0]
    var price = index[item]

    itemsAndPrices.push(`${item} at $${price}`)
  }
  if (cart.length === 1) {
    console.log(`In your cart, you have ${itemsAndPrices}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${itemsAndPrices.join(" and ")}.`)
  } else {
    var last = itemsAndPrices.pop()
    console.log(`In your cart, you have ${itemsAndPrices.join(", ")}, and ${last}.`)
  }
}


function total() {
  var price = 0
  for (var i = 0; i < cart.length; i++) {
    var index = cart[i]
    var item = Object.keys(index)[0]
    price = price + index[item]
  }
  console.log(price)
  return price
}

function removeFromCart(item) {
  var match = false
  for (var i = 0; i < cart.length; i++) {
    var index = cart[i]
    var inList = Object.keys(index)[0]
    if (inList === item) {
      cart.splice(i, 1)
      match = true
      console.log("Removed from cart")
    }
  }
  if (match === false) {
      console.log("That item is not in your cart.")
  }
  return cart
}
function placeOrder(cardNumber) {
  if (typeof cardNumber === 'undefined') {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
    return cart
  }
}
