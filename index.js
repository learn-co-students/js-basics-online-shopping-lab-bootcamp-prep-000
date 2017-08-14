var cart = [];

function getCart(itemName) {
  return cart
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(itemName) {
 // write your code here
 var itemPrice = Math.floor((Math.random() * 100) + 1)
 var currentItem = {[itemName]: {}}
 currentItem[itemName] = itemPrice
 cart.push(currentItem)
 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var itemName
  var itemPrice
  var currentObject
  var startMessage = `In your cart, you have`
  var message = []
  var finalMessage
  var temp = ''

  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
    }
  else {
        for (var i = 0; i < cart.length; i++) {
        currentObject = cart[i]
        itemName = Object.keys(currentObject)[0]
        itemPrice = currentObject[itemName]
        message.push(`${itemName} at $${itemPrice}`)
      }
        if (cart.length === 1) {
          finalMessage = `${startMessage} ${message[0]}.`

        }
        else if (cart.length === 2) {
          finalMessage = `${startMessage} ${message[0]} and ${message[1]}.`
          }
        else {
          for (var i = 0; i < message.length-1; i++) {
            temp += `${message[i]}, `
          }
          finalMessage = `${startMessage} ${temp}and ${message[message.length-1]}.`
        }
    console.log(`${finalMessage}`)
  }
}

function total() {
  // write your code here
  var itemName
  var itemPrice
  var currentObject
  var totalPriceTags = []
  var totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    currentObject = cart[i]
    itemName = Object.keys(currentObject)[0]
    itemPrice = currentObject[itemName]
    totalPriceTags.push(`${itemPrice}`)
  }
  for (var i = 0; i < totalPriceTags.length; i++) {
    if (totalPriceTags.length > 0) {
      totalCost+=parseInt(totalPriceTags[i])
    }
  }
  return totalCost
}

function removeFromCart(item){
  // write your code here
  debugger
  var itemExists = false
  var cartObject = {}
  for (var i = 0; i < cart.length; i++) {
    cartObject = cart[i]
    if (cartObject.hasOwnProperty(item)) {
      cart.splice(i,1)
      itemExists = true
    }
  }
  if (itemExists === false) {
    console.log("That item is not in your cart.")
  }
}
function placeOrder(cardNumber) {
  // write your code here
  debugger
  var card= parseInt(cardNumber)
  var customerTotal = total();
  if (cardNumber) {
  console.log(`Your total cost is $${customerTotal}, which will be charged to the card ${card}.`)
  cart = [];
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
    }
  }
