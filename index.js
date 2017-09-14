var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push({[item] : price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
const l = cart.length
if (!l) {
return console.log("Your shopping cart is empty.")
}
const itemsAndPrices = []
for (let i = 0; i < l; i++) {
let itemAndPrice = cart[i]
let item = Object.keys(itemAndPrice)[0]
let price = itemAndPrice[item]
itemsAndPrices.push(`${item} at \$${price}`)
}
return console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
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

function removeFromCart(item) {
  if (!cardNumber) {
      console.log("We don't have a credit card on file for you to place your order.")
    } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart.length = 0
    }
}


function placeOrder(cardNumber) {

 if (cardNumber === undefined){
   console.log("Sorry, we don\'t have a credit card on file for you.")
 }
 else{

   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
   cart = []
   return cart
 }
  }
