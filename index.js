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
  let itemPrice = Math.floor(Math.random()*100)
  let grocery = {[item]: itemPrice}
  cart.push(grocery)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
// write your code here
  if (!cart.length) {
    console.log("Your shopping cart is empty.")
  }
// store all the repeated phrases in array (x at $y)
  let newArray = []
  for (let i = 0; i < cart.length; i++) {
    let itemKey = Object.keys(cart[i])[0]
    newArray.push(`${itemKey} at $${cart[i][itemKey]}`)
  }
// loop through array accordingly to construct printed phrase
  let printPhrase = `In your cart, you have`
  newArray[newArray.length-1] = newArray[newArray.length-1] + `.`
  if (newArray.length == 1) {
    console.log(printPhrase + ` ` + newArray[0])
  }
  else if (newArray.length == 2) {
    console.log(printPhrase + ` ` + newArray[0] + ` and ` + newArray[1])
  }
  else {
    newArray[newArray.length-1] = `and ` + newArray[newArray.length-1]
    console.log(printPhrase + ` ` + newArray.join(`, `))
  }
}

function total() {
// write your code here
  let totalPrice = 0
  for (let i = 0; i < cart.length; i++) {
    let itemKey = Object.keys(cart[i])[0]
    totalPrice += cart[i][itemKey]
  }
  return totalPrice
}

function removeFromCart(item) {
// write your code here
  let inCart = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      inCart = true
      cart.splice(i, 1)
    }
  }
  if (inCart === false){
    console.log(`That item is not in your cart.`)
  }

  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0)
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
