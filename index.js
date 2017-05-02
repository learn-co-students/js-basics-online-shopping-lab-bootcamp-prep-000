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
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price});
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  var l = cart.length
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    var cartString = `In your cart, you have`
    for (let i = 0; i < l; i++){
      for (var nextItem in cart[i]){
        cartString += ` ${nextItem} at $${cart[i][nextItem]}`
      }
      if (i < (l-1)) {
        cartString += ','
      } else {
        cartString += '.'
      }
    }
    console.log(cartString)
  }
}

function removeFromCart(item) {
  var k = 0
  var l = cart.length
    for (let i = 0; i < l; i++){
      var nextItem = cart[i]
      if (nextItem.hasOwnProperty(item) === true ) {
      cart.splice(i, 1);
      }
      else {
        k++
      }
    }
    if (k === l) {
      console.log("That item is not in your cart.")
    }
  }


function placeOrder(cardNumber) {
  var l = cart.length
  var totalCost = 0
  if (arguments.length < 1 ) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    for (let i = 0; i < l; i++) {
      for (var nextItem in cart[i]) {
        var nextPrice = cart[i][nextItem]
        totalCost += nextPrice
      }
    }
    console.log(`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}
