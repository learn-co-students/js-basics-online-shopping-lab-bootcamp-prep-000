var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
//var randomNumber = Math.floor(Math.random() * 100)
var itemObject = {[item]: Math.floor(Math.random() * 100)}
cart.push(itemObject)
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
var returnString = "In your cart, you have "
  if (cart.length === 0){
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1) {
    // returnString = returnString + Object.keys(cart[0]) + ' at $' + cart[0][Object.keys(cart[0])] + '.';
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
  } else if (cart.length === 2) {
    //returnString = returnString + Object.keys(cart[0]) + ' at ' + Object.values(cart[0])  + ' and ' + Object.keys(cart[1]) + ' at ' + Object.values(cart[1])  + '.'
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`);
  } else if (cart.length >= 3) {
    for (var i =0; i < cart.length - 1; i++) {
      returnString = returnString + Object.keys(cart[i]) + ' at $' + cart[i][Object.keys(cart[i])] + ', '
    }
    returnString = returnString + 'and ' + Object.keys(cart[cart.length - 1]) + ' at $' + cart[cart.length - 1][Object.keys(cart[cart.length - 1])] + '.'
    console.log(returnString)
  }
  //console.log(returnString)
  return
}




function total() {
  var cartTotal = 0
  for (var i = 0; i < cart.length; i++) {
    cartTotal = cartTotal + cart[i][Object.keys(cart[i])]
  }
  return cartTotal
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return
    }
  }
  console.log('That item is not in your cart.')
  return
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
