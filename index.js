var cart = [];

function getCart() {
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {

  var price = Math.floor(100 * Math.random())

  cart.push( {[item]: price} )

  console.log(`${item} has been added to your cart.`)

  return cart
}





function removeFromCart(unwantedItem) {

  var coin = 0

  for (var i=0; i < cart.length; i++) {
    for (var item in cart[i]) {
      if (unwantedItem === item) {
        cart.splice(i, 1)
        coin = 1
      }
    }
  }

  if (coin === 0) {
    console.log("That item is not in your cart.")
  }

  return cart
}
removeFromCart('socks')
console.log(cart)

//cart = [{'socks': 73},{'puppy':3},{'iPhone':26}]
function viewCart(){

  if (cart.length > 0) {
    var printMe = "In your cart, you have"

    for (var i = 0; i<cart.length; i++) {

      for (var item in cart[i]) {
         printMe += (` ${item} at $${cart[i][item]},`)
      }

    }
    printMe = printMe.substring(0, printMe.length - 1) + '.'
    console.log(printMe)

  } else {
      console.log("Your shopping cart is empty.")
  }

}
//viewCart()
var cart = [{'socks': 73},{'puppy':3},{'iPhone':26}]

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}



function placeOrder(card){
  var cardNumber = parseInt(card)
  if (cardNumber > 0) {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else {
      console.log("We don't have a credit card on file for you to place your order.")
  }
  cart = []
  return cart
}

placeOrder(123)
