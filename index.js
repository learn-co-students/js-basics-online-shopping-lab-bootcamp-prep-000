var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var object = {[itemName]: Math.floor(Math.random()*100+1)}
  cart.push(object)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length===0) {
    console.log("Your shopping cart is empty.")
  } else if(cart.length===1) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)
  } else if(cart.length===2) {
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  } else {
      var string = 'In your cart, you have '
      for(var i = 0; i < cart.length-1; i++) {
        string = string + `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
      }
      string = string + `and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`
      console.log(string)
  }
}

function total() {
  var totalPrice = 0
  for(var i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + parseInt(cart[i][Object.keys(cart[i])])
  }
  return totalPrice
}

function removeFromCart(item) {
  for(var i = 0; i<cart.length; i++) {
    if(cart[i].hasOwnProperty([item])) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart = []
}

placeOrder()
var test = [];
var firstMeal = "breakfast"
var number = Math.random()
console.log(number)
var object = {[firstMeal]: Math.floor(Math.random()*100+1)}
var object2 = {lunch: "Chik Fil A"}
test.push(object)
console.log(test)
test.push(object2)
console.log(test)
console.log(`${Object.keys(test[0])}, ${test[0][Object.keys(test[0])]}`)
console.log(`In your cart, you have ${Object.keys(test[0])} at $${test[0][Object.keys(test[0])]} and ${Object.keys(test[1])} at $${test[1][Object.keys(test[1])]}.`)

var string = 'My name is Ronil'
console.log(string)
string = string + 'jesus'
console.log(string)
console.log(test[0].hasOwnProperty([firstMeal]))

if(test[0].hasOwnProperty('breakfast')) {
  console.log ("yes")
} else {
  console.log ("No")
}

test[0].hasOwnProperty('breakfast')
console.log(test[0])

function tests(item) {
  for(var i = 0; i<test.length; i++) {
  if(test[i].hasOwnProperty([item])) {
    test.splice(i, 1)
    console.log(test)
    return test
  }
}
console.log('That item is not in your cart')
return test
}

tests('breakfast')
