var cart = [];

function setCart(newCart) {
  newCart = []
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
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
  }

  function viewCart() {
if(cart.length > 0) {
  var itemAtPrice = []
  for(var i = 0, l = cart.length; i < l; i++) {
    var itemAndPrice = cart[i]
    var items = Object.keys(cart[i])
    var price = itemAndPrice[items]
    var itemList = " " + items + " at " + "$" + price
    itemAtPrice.push(itemList)
      }
    console.log(`In your cart, you have${itemAtPrice.join()}.`)
} else {
  console.log("Your shopping cart is empty.")
}
}

function removeFromCart(item) {
  var index = -1
  for(var i = 0, l = cart.length; i < l; i++) {
     var itemKeys = Object.keys(cart[i])
      if(item === itemKeys.toString()) {
       index = cart.indexOf(cart[i])
        }
  }
    if(index > -1) {
      cart.splice(index, 1)
        return cart
    } else {
      console.log("That item is not in your cart.")
    }
  return cart
}
function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart(cart)
    return cart
  }
}
