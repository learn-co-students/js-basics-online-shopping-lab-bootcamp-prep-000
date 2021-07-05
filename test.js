item = "apple"
console.log(item)
var cart = { [item]: Math.floor(Math.random()*(100)+1) }
console.log(cart)
console.log(`${item} has been added to your cart.`)

basket = []
function addtobasket(item) {
  basket.push(item)
  console.log(basket)
  console.log(basket.length)
}

addtobasket("pear")
addtobasket("orange")

var cart = []

/*
function addToCart(item) {
  cart[item] = Math.floor(Math.random()*(100)+1)
  console.log(`${item} has been added to your cart.`)
  console.log(cart)
  console.log(Object.keys(cart).length)
}
*/

function addToCart(item) {
  var addeditems = {[item]: Math.floor(Math.random()*(100)+1) }
  cart.push(addeditems)
  console.log(addeditems)
  console.log(`${item} has been added to your cart.`)
  console.log(cart)
  console.log(Object.keys(cart).length)
}

///addToCart("Milk")
///addToCart("Cereal")
///addToCart("Steak")

///viewCart testing
console.log('~~~ viewCart testing ~~~')

/*
var n = cart.length
console.log(n)

for ( let i = 0; i < cart.length; i++) {
console.log(cart) ///cart is an array of objects (key-value pairs)
console.log(cart[i]) ///displays the element at index [i] which is a key-value pair OBJECT
console.log(Object.keys(cart[i])) ///displays the 1 element array of the key of object at index [i] (remember cart[i] is an OBJECT)
console.log(Object.keys(cart[i])[0]) ///Then gets value of said array at index [0] (basically converts object to value)
console.log(cart[i][Object.keys(cart[i])[0]]) ///Gets the corresponding value of key-value pair (in the form of obj[key] = value
console.log()
var food = Object.keys(cart[i])[0]
var cost = cart[i][Object.keys(cart[i])[0]]
console.log(`In your cart, you have ${food} at $${cost}.`)
}
console.log()
*/
addToCart("Milk")
addToCart("Cereal")
///addToCart("Steak")

function viewCart() {
  var n = cart.length
  var inCart = []
  if (n === 0) {
    console.log("Your shopping cart is empty.")
  } else if (n === 1) {
    var food = Object.keys(cart[0])[0]
    var cost = cart[0][Object.keys(cart[0])[0]]
    console.log(`In your cart, you have ${food} at $${cost}.`)
  } else if (n === 2) {
    var food1 = Object.keys(cart[0])[0]
    var cost1 = cart[0][Object.keys(cart[0])[0]]
    var food2 = Object.keys(cart[1])[0]
    var cost2 = cart[1][Object.keys(cart[1])[0]]
    console.log(`In your cart, you have ${food1} at $${cost1} and ${food2} at $${cost2}.`)
  } else {
    for ( let i = 0; i < cart.length-1; i++) {
      var food = Object.keys(cart[i])[0]
      var cost = cart[i][Object.keys(cart[i])[0]]
      inCart.push(` ${food} at $${cost}`)
    }
    var food = Object.keys(cart[n-1])[0]
    var cost = cart[n-1][Object.keys(cart[n-1])[0]]
    inCart.push(` and ${food} at $${cost}`)
    console.log(`In your cart, you have${inCart}.`)
  }
}

viewCart()
/*
///total cost testing
console.log('~~~ total cost testing ~~~')
var totalcost = 0
console.log(totalcost)

for ( let i = 0; i < cart.length; i++) {
  ///totalcost = totalcost + 1
  totalcost = totalcost + cart[i][Object.keys(cart[i])[0]]
  console.log(totalcost)
}
console.log()

///placeorder testing
console.log('~~~ place order testing ~~~')

function placeOrder(cardNumber) {

  console.log(cardNumber)
  if (isNaN(cardNumber)) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`)
    ///return cart = []
  }
}

placeOrder(123456789)
console.log()

///removeitem testing
console.log('~~~ remove item testing ~~~')
console.log(cart)
///console.log(Object.keys(cart[0]))
function removeFromCart(item) {
  var inCart = false
  var itemnum = 0
  for ( let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      inCart = true
      itemnum = i
    } else {

    }
  }
  if (inCart) {
    console.log(`Didn\'t want the ${item} anyway`)
    console.log(itemnum)
    cart = [...cart.slice(0,itemnum),...cart.slice(itemnum+1)]
    console.log(cart)
  } else {
    console.log(`${item} is not in your cart.`)
    ///console.log(cart)
    ///return cart
  }
}
removeFromCart("Yogurt")
removeFromCart("Steak")
removeFromCart("Cereal")
removeFromCart("Milk")
*/
