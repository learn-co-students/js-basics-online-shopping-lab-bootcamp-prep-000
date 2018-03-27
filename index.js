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
 var price = Math.floor( Math.random() * Math.floor(100) ) + 1
 var itemInfo = { 'itemName': item, 'itemPrice': price }
 cart.push( itemInfo )
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if ( cart.length === 0 ) {
    return "Your shopping cart is empty."
  } else if ( cart.length === 1 ) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var array = []
    for ( var i = 0; i < cart.length -1; i++) {
    array.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    array.push(` and ${cart[cart.length -1].itemName} at $${cart[cart.length - 1].itemPrice}`)
    return "In your cart, you have" + array + "."
  }
 }

function total() {
  // write your code here
  var totalCost = cart[0].itemPrice
  for (var i = 1; i < cart.length; i++) {
    totalCost += cart[i].itemPrice
  } 
  return totalCost
 }

function removeFromCart(item) {
  // write your code here
  for ( var i = 0; i < cart.length; i++ ) {
    if (cart[i].itemName === item) {
      var s = cart.splice(i,1)
      return cart
    } 
    }
  if ( s === undefined ) {
    return 'That item is not in your cart.'
  }
  }
  
function placeOrder(cardNumber) {
  // write your code here
  if ( cardNumber === undefined ) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var cost = total()
    cart = []
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
  }