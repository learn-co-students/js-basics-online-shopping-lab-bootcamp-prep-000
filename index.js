var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  var itemName = { [item]: itemPrice };

  cart.push(itemName)
  console.log(item + ' has been added to your cart.')
  return cart
}

function viewCart() {
  var length = cart.length
  if (length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else if (length === 1) {
    var itemAndPrice = cart[0]
    var item = Object.keys(itemAndPrice)[0]
    var price = itemAndPrice[item]

    console.log(`In your cart, you have ` + item + ` at $` + price + `.`)
  }
  else if (length === 2) {
    var itemAndPrice1 = cart[0]
    var itemAndPrice2 = cart[1]
    var item1 = Object.keys(itemAndPrice1)[0]
    var item2 = Object.keys(itemAndPrice2)[0]
    var price1 = itemAndPrice1[item1]
    var price2 = itemAndPrice2[item2]

    console.log(`In your cart, you have ${item1} at $${price1} and ${item2} at $${price2}.`)
  }
  else {
    var base = `In your cart, you have `

    for (var i = 0; i < length - 1; i++) {
      var itemAndPrice = cart[i]
      var item = Object.keys(itemAndPrice)[0]
      var price = itemAndPrice[item]

      base += `${item} at $${price}, `
    }
    length = length - 1
    itemAndPrice = cart[length]
    item = Object.keys(itemAndPrice)[0]
    price = itemAndPrice[item]

    base += `and ${item} at $${price}.`
    console.log(base)
  }
}

function total() {
  var cost = 0

  for ( var i = 0; i < cart.length; i++) {
    var itemAndPrice = cart[i]
    var item = Object.keys(itemAndPrice)[0]
    var price = itemAndPrice[item]
    cost += parseInt(price)
  }

  return cost
}

function removeFromCart(item) {
  debugger

  for (var i = 0; i < cart.length; i++) {
    var object = cart[i]
    if (object.hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }

  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  debugger

  if (cardNumber) {
    var cartTotal = total()
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0, cart.length)
  }
  else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
