var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
// passed all test
function addToCart(item) {
 var itemPrice = Math.floor((Math.random() * 100) + 1)
 var itemName = item
 cart.push({[itemName]: itemPrice})
 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
  var itemName, itemPrice, newObject, finalMessage, message = [], temp = ''

  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
    }
  else {
    for (var i = 0; i < cart.length; i++) {
    newObject = cart[i]
    itemName = Object.keys(newObject)[0]
    itemPrice = newObject[itemName]
    message.push(`${itemName} at $${itemPrice}`)
      }
    if (cart.length === 1) {
            finalMessage = `In your cart, you have ${message[0]}.`
    } else if (cart.length === 2) {
            finalMessage = `In your cart, you have ${message[0]} and ${message[1]}.`
    }  else {
        for (var i = 0; i < message.length-1; i++) {
              temp += `${message[i]}, `
        }
          finalMessage = `In your cart, you have ${temp}and ${message[message.length-1]}.`
    }
      console.log(`${finalMessage}`)
  }
}

function total() {
  var prices = []
  for (var i = 0; i < cart.length; i++){
    var currentItem = cart[i]
    var currentName = Object.keys(currentItem)[0]
    var currentPrice = currentItem[currentName]
    prices.push(currentPrice);
  }
  var total = prices.reduce(function(sum, value) {
  return sum + value;
}, 0);
return total
}

function removeFromCart(item) {
 var i = 0
 do {
   i++
 } while (cart[i] !== undefined && cart[i].hasOwnProperty(item) !== true)
 if(i < cart.length){
   cart.splice(i, 1)
   return cart
 } else {
   console.log(`That item is not in your cart.`)
   return cart
 }
}
function placeOrder(cardNumber) {
 if(cardNumber) {
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
   return cart = []
  } else {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
}
