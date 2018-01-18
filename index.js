var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() * 100)
 cart.push({[item]: itemPrice})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    var item = Object.keys(cart[0])
    console.log(`In your cart, you have ${item} at $${cart[0][item]}.`)
  } else if(cart.length === 2){
    var item1 = Object.keys(cart[0])
    var item2 = Object.keys(cart[1])
    console.log(`In your cart, you have ${item1} at $${cart[0][item1]} and ${item2} at $${cart[1][item2]}.`)
  } else {
    var n = 0 
    var returnStatement = `In your cart, you have `
    while(n < cart.length - 1){
      var dynamicItem = Object.keys(cart[n])
      returnStatement = returnStatement + `${dynamicItem} at $${cart[n][dynamicItem]}, `
      n++
    }
    var lastItem = Object.keys(cart[cart.length - 1])
    returnStatement = returnStatement + `and ${lastItem} at $${cart[cart.length - 1][lastItem]}.`
    console.log(returnStatement)
  }
}

function total() {
  var n = 0
  var sum = 0
  while(n < cart.length){
    var unit = Object.keys(cart[n])
    sum += cart[n][unit]
    n++
  }
  return sum
}

function removeFromCart(item) {
  var n = 0 
  while (n < cart.length){
    if (cart[n].hasOwnProperty(item)){
      cart.splice(n, 1)
      return `${item} removed from cart`
    } else {
      n++
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  var amountDue = total()
  if (cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${amountDue}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
