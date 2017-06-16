var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random() * 100) + 1)
  var itemWithPrice = {[item]: itemPrice}
  cart.push(itemWithPrice)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var i = 0

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }else{
    var statement = `In your cart, you have`
    while (i < cart.length) {
      var itemAndPrice = cart[i]
      if (i === 0) {
        statement += ` ${Object.keys(itemAndPrice)} at $${itemAndPrice[Object.keys(itemAndPrice)]}`
      }else if (cart.length === 2 && i === 1) {
        statement += ` and ${Object.keys(itemAndPrice)} at $${itemAndPrice[Object.keys(itemAndPrice)]}`
      }else if (i + 1 === cart.length) {
        statement += `, and ${Object.keys(itemAndPrice)} at $${itemAndPrice[Object.keys(itemAndPrice)]}`
      }else {
        statement += `, ${Object.keys(itemAndPrice)} at $${itemAndPrice[Object.keys(itemAndPrice)]}`
      }
      i++
    }
    statement += `.`
    console.log(statement)
  }
}

function total() {
  var cartTotal = 0
  for (let i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i]
    cartTotal += itemAndPrice[Object.keys(itemAndPrice)]
  }
  return cartTotal
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i]
    if (itemAndPrice.hasOwnProperty(item)) {
      cart = [...cart.slice(0, i), ...cart.slice(i + 1)]
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
