var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItemObj = {}
  newItemObj = Object.assign({}, {[item]: Math.floor(Math.random()*100)})
  cart.push(newItemObj)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var itemNames = []
  var itemPrices = []
  var itemObjInCart = []
  var itemObjName = []
  var itemObjPrice = []
  var cartMsg = "In your cart, you have"

  for (var i = 0; i < cart.length; i++) {
    itemObjInCart = cart[i];
    itemObjName = Object.keys(itemObjInCart)
    itemObjPrice = itemObjInCart[itemObjName]
    itemNames.push(itemObjName)
    itemPrices.push(itemObjPrice)
  }

  if (cart.length === 0) {
    cartMsg = `Your shopping cart is empty.`
    console.log(cartMsg)
  } else if (cart.length === 1) {
    cartMsg = `${cartMsg} ${itemNames[0]} at $${itemPrices[0]}.`
    console.log(cartMsg)
  } else if (cart.length === 2) {
    cartMsg = `${cartMsg} ${itemNames[0]} at $${itemPrices[0]} and ${itemNames[1]} at $${itemPrices[1]}.`
    console.log(cartMsg)
  } else {
    cartMsg = `${cartMsg} ${itemNames[0]} at $${itemPrices[0]}`
    for (var i = 1; i < cart.length - 1; i++) {
      cartMsg = cartMsg + `, ${itemNames[i]} at $${itemPrices[i]}`
    }
    cartMsg = cartMsg + `, and ${itemNames[itemNames.length-1]} at $${itemPrices[itemPrices.length-1]}.`
    console.log(cartMsg)
  }
}

function total() {
  var totalCost = 0
  var itemObjInCart = []
  var itemObjName = []
  var itemObjPrice = []

  for (var i = 0; i < cart.length; i++) {
    itemObjInCart = cart[i];
    itemObjName = Object.keys(itemObjInCart)
    itemObjPrice = itemObjInCart[itemObjName]

    totalCost = totalCost + itemObjPrice
  }
  return totalCost
}

function removeFromCart(item) {
  var itemObjInCart = []
  var updatedCart = []
  var check = 0

  for (var i = 0; i < cart.length; i++) {
    itemObjInCart = cart[i];
    if (itemObjInCart.hasOwnProperty(item)) {
      check = check + 1
    } else {
      updatedCart = [...updatedCart, itemObjInCart]
    }
  }

  if (check === 0) {
    console.log(`That item is not in your cart.`)
  }

  cart = updatedCart
  return cart
}

function placeOrder(cardNumber) {
  var totalCost = total()

  if (!cardNumber) {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
