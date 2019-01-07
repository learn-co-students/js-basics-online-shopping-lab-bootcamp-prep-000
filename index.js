var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // generate random price
  var itemPrice = Math.floor(Math.random() * 100)
  // assign info to new object
  var newItem = {[item]: itemPrice};
  // add item to cart array
  cart.push(newItem)
  console.log(item + ' has been added to your cart.')
  return cart
}

function viewCart() {
  var returnStatement = 'In your cart, you have '
  var itemObj = {}
  var itemArray = []
  var item = undefined
  var itemPrice = undefined
  if (cart.length === 0) { // if the cart is empty...
    console.log('Your shopping cart is empty.')
  }else if(cart.length === 1) { // if the cart only has one item...
    for(let i=0; i<cart.length; i++) {
      // The next four lines describe how I extract the information from
      // the array of objects in the cart
      itemObj = cart[i]
      itemArray = Object.keys(itemObj)
      item = itemArray[0]
      itemPrice = itemObj[item]
      returnStatement = `In your cart, you have ${item} at $${itemPrice}.`
      console.log(returnStatement)
    }
  }else if(cart.length === 2) { // two items in cart
    for(let i=0; i<cart.length; i++) {
      itemObj = cart[i]
      itemArray = Object.keys(itemObj)
      item = itemArray[0]
      itemPrice = itemObj[item]
      if(i === 1) {
        returnStatement = returnStatement + ` and ${item} at $${itemPrice}.`
        console.log(returnStatement)
      }
      returnStatement = returnStatement + `${item} at $${itemPrice}`
    }
  }else if(cart.length >= 3) { // Three or more items in cart
     for(let i=0; i<cart.length; i++) {
      itemObj = cart[i]
      itemArray = Object.keys(itemObj)
      item = itemArray[0]
      itemPrice = itemObj[item]
      if( i < cart.length - 1) {
        returnStatement = returnStatement + `${item} at $${itemPrice}, `
      }else if(i === cart.length -1) {
        returnStatement = returnStatement + `and ${item} at $${itemPrice}.`
      }
     }
    console.log(returnStatement)
  }
}

function total() {
  // Using the same methods from the viewChart() to extract prices from items in cart
  var itemObj = {}
  var itemArray = []
  var item = undefined
  var itemPrice = undefined
  var cartTotal = 0
  if(cart.length === 0) {
    return cartTotal
  }else {
  for(let i = 0; i < cart.length; i++) {
    itemObj = cart[i]
    itemArray = Object.keys(itemObj)
    item = itemArray[0]
    itemPrice = itemObj[item]
    cartTotal = cartTotal + itemPrice
  }
  return cartTotal
  }
}

function removeFromCart(item) {
  var itemObj = {}
  var itemArray = []
  var itemRef = undefined
  var cartCheck = true
  // loop through cart to check for item to be removed
  for(let i=0; i < cart.length; i++) {
    // if the item is in the cart switch the cartCheck bool
    if(cart[i].hasOwnProperty(item) === true) {
      cartCheck = false
    }
  }
  for(let j=0; j < cart.length; j++) {
    // loop through the cart again to find the item
    itemObj = cart[j]
    itemArray = Object.keys(itemObj)
    itemRef = itemArray[0]
    // if the item is in the cart remove it and update the cart
    if(itemRef === item) {
      var cartUpdate = [...cart.slice(0,j), ...cart.slice(j+1)]
      cart = cartUpdate
    }
  }
  // if the item isn't in the car this will trigger the
  // log statement
  if(cartCheck === true) {
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(cardNumber) {
  var cartTotal = 0
  // if there's a card number, "charge" the card and empty the cart
  if(cardNumber) {
    cartTotal = total()
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
