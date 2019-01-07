var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100+1)
  var newObject = {[item]: price} // [] are needed to reference an variable in object construction
  cart.push(newObject)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  } else if (cart.length === 1) {
    var firstObj = cart[0] // first item Object in the cart array 
    var firstObjKeys = Object.keys(firstObj) // array of object keys
    console.log(`In your cart, you have ${firstObjKeys[0]} at $${firstObj[firstObjKeys[0]]}.`)
  } else if (cart.length === 2) {
    firstObj = cart[0] // first item Object in the cart array 
    firstObjKeys = Object.keys(firstObj) // array of object keys
    var secondObj = cart[1] // second item Object in the cart array 
    var secondObjKeys = Object.keys(secondObj) // array of object keys
    console.log(`In your cart, you have ${firstObjKeys[0]} at $${firstObj[firstObjKeys[0]]} and ${secondObjKeys[0]} at $${secondObj[secondObjKeys[0]]}.`)
  } else {
    var printString = "In your cart, you have "
    // for all items in cart except the last item
    for (var i = 0; i < cart.length - 1; i++) {
      var nObj = cart[i]
      var nObjKeys = Object.keys(nObj) 
      printString += `${nObjKeys[0]} at $${nObj[nObjKeys[0]]}, `
    }
    // for the last item
    nObj = cart[cart.length - 1]
    nObjKeys = Object.keys(nObj) 
    printString += `and ${nObjKeys[0]} at $${nObj[nObjKeys[0]]}.`
    console.log(printString)
  }
  //
}

function total() {
  // sum total value of items in the cart
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    var nObj = cart[i]
    var nObjKeys = Object.keys(nObj)
    total += nObj[nObjKeys[0]]
    // total += cart[i][Object.keys(cart[i])[0]] // value of each item Object (short-hand)
  }
  return total
}

function removeFromCart(item) {
  // checks if item is in the cart, and if so, removes it
  for (var i = 0; i < cart.length; i++) {
    var nObj = cart[i]
    var nObjKeys = Object.keys(nObj)
    if (nObjKeys[0] === item) {
      cart.splice(i,1)
      return cart
    } 
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if (isNaN(cardNumber)) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = []
  }
}

// Matt's test to console
// placeOrder(123)