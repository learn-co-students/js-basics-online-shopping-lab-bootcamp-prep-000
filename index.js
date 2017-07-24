
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var itemPrice = Math.floor((Math.random()*100) + 1)
  var newObj = {[item]: itemPrice}
  cart.push(newObj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

//addToCart("Poop")

//addToCart("dumb")
//addToCart("ick")
/*
console.log(cart)
console.log(cart[0])
console.log(cart[1])
console.log(cart[2])

console.log(Object.values(cart[0]))
*/

console.log(cart.length)

function viewCart() {
  // write your code here
  var statement = "In your cart, you have"
  if (cart.length === 0) {
    statement = "Your shopping cart is empty."
  }
  else {
    for (var i in cart) {
      console.log(i)
      if (cart.length === 1) {
        statement += ` ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
      }
      else if (cart.length === 2){
        if (i < cart.length - 1) {
          statement += ` ${Object.keys(cart[i])} at $${Object.values(cart[i])}`
        }
        else {
          statement += ` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
        }
      }

        else {
          if (i < cart.length - 1) {
            statement += ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
          }
          else {
            statement += ` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
          }
        }
      }
    }
  console.log(statement)
  }

function total() {
  // write your code here
  var cost = 0
  for (var i in cart) {
    cost += parseInt(Object.values(cart[i]))
  }
  return cost
}

function removeFromCart(item) {
  // write your code here
  var deleted = 0
  for (var i in cart)
    if (cart[i].hasOwnProperty(item)) {
      delete cart.splice(i, 1)
      deleted++
    return cart
    }
  if (deleted === 0){
    console.log("That item is not in your cart.")
    return cart
  }
}
/*
addToCart("Bands")
addToCart("will")
addToCart("make")
addToCart("her")
addToCart("dance")

console.log(cart)

removeFromCart("dance")

console.log(cart)
*/

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
