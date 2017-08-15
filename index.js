var cart = [];

function rngInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 // var newItemObj = {[item]: rngInt(1, 100)} <- commenting this out to see if a more efficient way works
 cart.push({[item]: rngInt(1, 100)})
 console.log(`${item} has been added to your cart.`)

 return cart

} // end of addToCart function

function viewCart() {
  // write your code here
  var inYourCart = []
  for(let i = 0; i < cart.length; i++) {
    inYourCart.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)

  } //end of for loop

  if(cart.length === 1) {
    console.log(`In your cart, you have${inYourCart}.`)

  } else if(cart.length === 2) {
    console.log(`In your cart, you have${inYourCart[0]} and${inYourCart[1]}.`)

  } else if (cart.length > 2){
    console.log(`In your cart, you have${inYourCart.slice(0, inYourCart.length - 1)}, and${inYourCart.slice(-1)}.`)

  } else {
    console.log(`Your shopping cart is empty.`)

  } // end of if/else tree

} // end of viewCart function

function total() {
  // write your code here
  var cartTotal = 0
  for(let i = 0; i < cart.length; i++) {
    cartTotal += cart[i][Object.keys(cart[i])]

  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  let i = 0

  do {
    i++
  } while (cart[i] !== undefined && cart[i].hasOwnProperty(item) !== true)

  if(i < cart.length) {
    cart.splice(i, 1)
    return cart
  } else {
    console.log(`That item is not in your cart.`)
    return cart
  }

} // end of removeFromCart function

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null) {
    console.log(`Sorry, we don't have a credit card on file for you.`)

  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart =[]
  }

} // end of placeOrder function

/* ~ Test code ~

viewCart()
console.log()
addToCart('cheese')
viewCart()
console.log()
addToCart('bread')
viewCart()
console.log()
addToCart('detergent')
viewCart()
console.log()

addToCart('chips')
viewCart()
console.log()
addToCart('frozen dinner')
viewCart()
console.log()
addToCart('pizza')
viewCart()
console.log()
addToCart('shampoo')
viewCart()
console.log()
addToCart('band-aids')
viewCart()
console.log()
console.log(total())
console.log()
console.log(12 + cart[1][Object.keys(cart[1])])
console.log()
//console.log('Has own property? ' + cart[1].hasOwnProperty('bread'))
//console.log()
console.log(cart)
console.log()
removeFromCart('chips')
console.log(cart)
console.log()
removeFromCart('shampoo')
console.log(cart)
console.log()
viewCart()
console.log(`This should return 'not in cart:'`)
removeFromCart('shampoo')
console.log()
placeOrder()
console.log()
placeOrder(8523984632823)
console.log()
console.log(null)

var theObj = {daKine: 'here', makoa: 'tree', silly: 'ridikulus'}

console.log()
console.log(Object.keys(theObj))
console.log(Object.keys(cart[0]))
console.log(Object.keys(cart[1]))
console.log(Object.keys(cart[2]))
console.log(Object.valueOf(Object.keys(cart[1]).bread)) // prints: [Function: Object]
console.log('Has own property? ' + cart[1].hasOwnProperty('bread'))
//console.log(cart[0][cart[0]]) // prints: undefined
console.log(cart[1][Object.keys(cart[1])])
console.log(`You have ${Object.keys(cart[1])} at ${cart[1][Object.keys(cart[1])]}`)


console.log(`${cart[0]} is from ${cart[0]}`) // prints: [object Object] is from [object Object]

// math.random() experiments

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function generateRanomInt() {
  return Math.floor(Math.random() * 100 + 1);
}

function generateRandomPrice() {
  return `$${Math.floor(Math.random() * 50 + 1)}.${Math.floor(Math.random() * 100)}`;
}

*/
