//DEFAULT FUNCTIONS
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//GENERATE and RANDOM INT Helper functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCartItem(itemName) {
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function generateCartDescription() {
  var cartDescription = 'In your cart, you have '
  if ( getCart().length >= 1 ) {
    cartDescription += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`
  }
  if ( getCart().length >= 2 ) {
    var middleCartItemsDescription = ''
    for (var i=1; i<getCart().length -1; i++) {
      middleCartItemsDescription += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
    }
    cartDescription += `${middleCartItemsDescription}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }

  return `${cartDescription}.`
}

// ADD and VIEW Functions

function addToCart(item) {
  var item = generateCartItem(item)
  getCart().push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  return getCart().length === 0 ? "Your shopping cart is empty." : generateCartDescription()
}

//TOTAL function and HElPER

function total() {
  var sum = sumUpPrices()
  return sum
}

function sumUpPrices() {
  var sum = 0
  for (var i=0; i<getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice
  }
  return sum
}

// REMOVE and HELPER functions

function searchCartForItemToRemove(itemName) {
  var searchResult
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) {searchResult = getCart()[i]}
  }
  return searchResult
}

function notify() {
  return 'That item is not in your cart.'
}

function removeItemFromCart(itemToRemove) {
  var indexOfItemToRemove = cart.indexOf(itemToRemove)
  getCart().splice(indexOfItemToRemove, 1)
}

function removeFromCart(itemName) {
  var itemToRemove = searchCartForItemToRemove(itemName)
  return itemToRemove ? removeItemFromCart(itemToRemove) : notify()
}

function placeOrder(cardNumber) {
  if (arguments[0] == undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
    setCart([])
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}.`
  }
}



// function generateCartDescription comments
  // if the cart = exacly 1 (i.e. only one object in the array), then only the >= 1 if statement will run.
  // then the cart description will be updated and the function will return the cartDescription.

  // For any Cart item above 1, the >=2 statement will also run (which further updates cartDescription):

    // all of the middle objects print the middleCartItemDescription, until you get to the last index
    // this is achieved by subtracting 1 from length, so index for this middle doesn't reach last object

    // the last object has adds special printed statement - any middle cart objects plus ", and" plus the final cart object
    // all of this gets added on to the cartDescription from the first object in the array (above)





//My original version of addToCart
// function addToCart(item) {
//  var newObject = {itemName: item}
//  newObject.itemPrice = Math.floor(Math.random() * 100) + 1;
//
//  cart.unshift(newObject)
//  console.log(newObject)
//  return `${item} has been added to your cart.`
//   }

//My original version of viewCart
//   var newArray = [];
//
//  if (!cart.length){
//    return "Your shopping cart is empty."
//
//  } else if (cart.length === 1) {
//      newArray.push(`${cart[0].itemName} at $${cart[0].itemPrice}`)
//      return `In your cart, you have ${newArray.join(', ')}.`
//
//  } else {
//  for (let i = 0; i < cart.length; i++) {
//    if (i < cart.length - 1){
//      newArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
//    } else {
//      newArray.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}`)
//    }
//  }
//  return `In your cart, you have ${newArray.join(', ')}.`
//  }
// }
//
// function total() {
//   var sum = sumUpPrices()
//   return sum
