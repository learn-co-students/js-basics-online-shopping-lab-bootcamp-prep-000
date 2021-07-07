var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  // create new object to store item and price values
  // price is randomly generated number between 1 and 100

  var cartObj = { [item]: (Math.floor((Math.random() * 100) + 1)) }

  // add item object to cart array

  cart.push(cartObj)

  // print item has been added to the console and return cart
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

  let message = ''
  let counter = cart.length

  if (cart.length === 0){
    message += 'Your shopping cart is empty.'
    console.log(message)

  } else {
    message += 'In your cart, you have '
    for (let i = 0; i < cart.length; i++){

      let cartKey = Object.keys(cart[i])

      message += `${cartKey} at $${cart[i][cartKey]}`

      if (counter === 1){
        message += '.'
      } else if (cart.length === 2){
        message += ' and '
        counter--
      } else if (counter === 2) {
        message += ', and '
        counter--
      } else {
        message += ', '
        counter--
      }
    }
  console.log(message)
  }
}

function total() {
  // write your code here

  //set total cost counter
  let totalCost = 0

  //iterate through cart, similar to viewCart function

  for (let i = 0; i < cart.length; i++){

    let cartKey = Object.keys(cart[i])

    totalCost += cart[i][cartKey]

  }

    return totalCost

}

function removeFromCart(item) {

  //iterate through cart items

  for (let i = 0; i < cart.length; i++){

    //if item is found in cart, remove from cart and return changed cart

    var key = Object.keys(cart[i])
    if (key.indexOf(item) > -1) {
    cart.splice(i, 1)
    return cart
    }

  }
    //if cart does not contain matching item, function prints out "That item is not in your cart" and
    //return unchanged cart

    console.log('That item is not in your cart.')
    return cart
}

function placeOrder(cardNumber) {
  // write your code here

  //If no argument is received, the function prints our 'Sorry, we don't have a credit card on file
  // for you

  if(!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.')

  } else {

    //If card number received, function print out 'Your total cost is $x, which will be charged to the card cardNumber.'

    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

    //Empty cart array

    cart.splice(0, cart.length)

  }

}

/*addToCart('vanilla')
addToCart('yams')

console.log(cart)
removeFromCart('yams');
console.log(cart)
removeFromCart('yams');
*/
