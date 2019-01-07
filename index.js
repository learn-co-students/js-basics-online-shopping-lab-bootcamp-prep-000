var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random() * 100)
  var item = { [itemName]: itemPrice}
  console.log(`${itemName} has been added to your cart.`)
  cart.push(item)
  return cart
}

function viewCart() {
  var message = []
  var items = []
  var pre
  if (!(cart.length === 0)) {
    message = 'In your cart, you have'
      for (let i = 0; i < cart.length; i++) {
        if (!(i === 0) && i === cart.length-1) {pre = ' and'} else {pre = ''}
        items[i] = `${pre} ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`
      }
    if (cart.length > 2) {message += items.join(',')} else {message += items.join('')}
  } else {
    message = 'Your shopping cart is empty'
  }
  message += '.'
  console.log(message)
}

function total() {
  var itemCosts = 0
  for (let i = 0; i < cart.length; i++){
      itemCosts += cart[i][Object.keys(cart[i])]
  }
  return itemCosts
}

function removeFromCart(item) {
  var i = 0
  var initialLength = cart.length

  while (i < cart.length) {
    if (cart[i].hasOwnProperty(item)){
      break
    }
    i++
  }

  cart.splice(i,1)

  if (initialLength === cart.length) {
    console.log('That item is not in your cart.')
    return cart
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log(`Sorry, we don't have a credit card on file for you.`)
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    while(cart.length > 0) {
      cart.pop();
    }
  }
}
