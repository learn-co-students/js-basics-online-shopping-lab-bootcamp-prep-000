var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var newItemforCart = {}
newItemforCart[item] = (Math.floor(Math.random() * Math.floor(100)))
cart.push(newItemforCart)
console.log(`${item} has been added to your cart.`)
return cart
}


function viewCart() {
  if(!cart.length){
    console.log(`Your shopping cart is empty.`)
  }
  if(cart.length === 1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
  }
  if(cart.length === 2){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
  }
  if(cart.length >= 3){
    var allContentsInCart = ""
    for(var i=0; i<cart.length-1; i++){
      allContentsInCart += ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
    }
    console.log(`In your cart, you have${allContentsInCart} and ${Object.keys(cart[(cart.length-1)])} at $${Object.values(cart[(cart.length-1)])}.`)
  }
}


function total() {
  var sumTotal = 0
  for(var i=0; i<cart.length; i++){
    sumTotal += Number(Object.values(cart[i]))
  }
  return sumTotal
}

function removeFromCart(item) {
  //loop through array to look in each object
  for(var i =0; i<cart.length; i++){
    // if key value matches "item" - for in loop
    if(item in cart[i]){
      delete cart[i][item]
      cart.splice(i,1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0,cart.length)
  }
}
