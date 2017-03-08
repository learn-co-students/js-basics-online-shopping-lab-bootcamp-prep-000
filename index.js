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

function addToCart(item) {
  var price = getPrice()
  var newObj = {}

  newObj[item] = price
  //console.log(price)
  cart.push( newObj )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function getPrice() {
  return Math.floor((Math.random() * 100) + 1)
}

function viewCart() {
  var str = "In your cart, you have "

  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  }

  for (var i = 0; i < cart.length; i++) {
    var itemNumber = i + 1
    var item = getItemFromCart(cart, i)
    console.log(item)
    console.log(item[0])
    str += `${getItemName(item)} at $${getItemPrice(item)}${itemNumber == cart.length ? "." : ", "}`
  }
  console.log(str)
}

function getItemFromCart(cart, i) {
  return cart[i]
}

function getItemName(item) {
  return Object.keys(item)
}

function getItemPrice(item) {
  return item[Object.keys(item)]
}

function removeFromCart(itemName) {
  var begCartLength = cart.length

  if (begCartLength == 0) {
    console.log("That item is not in your cart.")
  }

  for (var i = 0; i < begCartLength; i++) {
    var item = getItemFromCart(cart, i)

    if (item.hasOwnProperty(itemName)) {
      cart.splice(i, 1)
    }
  }

  if (begCartLength == cart.length) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(ccNumber) {
  if (ccNumber == null) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
    cart = []
  }
}
