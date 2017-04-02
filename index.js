//cart is an array of objects, each containing shopping items as keys and price-numbers as values
var cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart (itemToPurchase) {
  var price = Math.floor(Math.random() * 100);
//  cart.push({itemToPurchase: `${price}`});
  cart.push({[itemToPurchase]: price});
  console.log(`${itemToPurchase} has been added to your cart.`);
  return cart
}

function total() {
  var t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
//      t += parseInt(cart[i][item], 10)  //version that adds the numbers
       t += cart[i][item]
    }
  }
//  t = t.toString()
  return t
}

//#viewCart should print each item in the cart and their cost:
     //Error: spy was never called with [ 'In your cart, you have socks at $undefined, puppy at $undefined, iPhone at $undefined.'

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var stringToReturn = "In your cart, you have";
    for (let i = 0, l = cart.length; i < l; i++) {
      for (var itemKey in cart[i]) {
        stringToReturn += ` ${itemKey} at $${cart[i][itemKey]},`
  }
}
    stringToReturn = stringToReturn.slice(0, -1)
    stringToReturn += ".";
    console.log(stringToReturn)
  }
}
/*
function removeFromCart(itemToRemove) {
  var itemAbsentIndicator = 1
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(itemToRemove)) {
      cart = [...cart.slice(0, i), ...cart.slice(i + 1)];
      itemAbsentIndicator = 0
      break
  }
}
  if (itemAbsentIndicator === 1) {
    console.log("That item is not in your cart.")
  }
  return cart
}
*/
//alternative method using filter function
function removeFromCart(itemToRemove) {
  let newCart = cart.filter(elementInCart => {
    // Test for filter is, for each element (which is an object) in cart, whether the 0th (and only) element of the array of the object's keys === itemToRemove
    Object.keys(elementInCart)[0] != itemToRemove
  })
  if (cart.length == newCart.length) {
    console.log("That item is not in your cart.")
  }
  else {
    cart = newCart
  }
  return cart
  }


function placeOrder(cardNumber) {
  if (typeof cardNumber === 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  cart.length = 0
}
