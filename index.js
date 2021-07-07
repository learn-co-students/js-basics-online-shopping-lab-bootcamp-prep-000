var cart = [];
var cardNumber = Math.floor(Math.random() * 100000000)

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor((Math.random()*(100 - 1) + 1))
 var initCart = {[item]:price}
 cart.push(initCart)
 console.log(`${item} has been added to your cart.`)
 return cart
}
addToCart('apple')
addToCart("bananas")
addToCart("carrots")
addToCart('daikon')
addToCart('eggplant')
addToCart("figs")
addToCart("grapes")
addToCart("halloumi")
addToCart("juice")


function viewCart() {
  // write your code here
  if (cart.length === 0) {
     console.log('Your shopping cart is empty.')

   } else if (cart.length === 1) {
     console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)

   } else if (cart.length === 2) {
     console.log(`In your cart, you have ${Object.keys(cart[cart.length-2])} at $${cart[cart.length-2][Object.keys(cart[cart.length-2])]} and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`)
   } else  {
     viewItems = []
     for ( i = 0; i < cart.length-1; i++) {
      viewItems.push(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
}
  console.log(`In your cart, you have${viewItems}, and ${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`)

  }
}
viewCart(cart)

function total() {
  // write your code here
 var totalPrice = 0
 for (let n = 0; n < cart.length; n++) {
  totalPrice = totalPrice + (cart[n][Object.keys(cart[n])])
 }
 return totalPrice
}
total(cart)

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i <cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log(`That item is not in your cart.`)
  return cart
}
removeFromCart('vanilla')
removeFromCart("halloumi")
removeFromCart("yams")

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber) {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  for (var i = cart.length; i>= 0; i--) {
    cart.pop();
  }
  } else
    console.log('Sorry, we don\'t have a credit card on file for you.')
return cart;
}
placeOrder(cardNumber)
