var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newcartitem = new Object()
  var itemName = item
  var itemPrice = Math.floor(Math.random() * 100)
  newcartitem[itemName] = itemPrice
  cart.push(newcartitem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function getItemAtIndex(index) {
  return Object.keys(cart[index])
}

function getPriceAtIndex(index) {
  return cart[index][getItemAtIndex(index)]
}

function itemToStringAtIndex(index) {
  return `${getItemAtIndex(index)} at $${getPriceAtIndex(index)}`
}

function viewCart() {
  if ( cart.length === 0 ) {
    console.log('Your shopping cart is empty.')
  }
  else if ( Object.keys(cart).length === 1 ) {
    console.log(`In your cart, you have ` + itemToStringAtIndex(0) + `.`)
  }
  else if ( Object.keys(cart).length === 2 ) {
    console.log(`In your cart, you have ${itemToStringAtIndex(0)} and ${itemToStringAtIndex(1)}.`)
  }
  else if ( Object.keys(cart).length > 2 ) {
    var i = 0
    var text = `In your cart, you have `
    while ( i < cart.length - 1 ) {
      text = text + `${itemToStringAtIndex(i)}, `
      i++
    }
    console.log(text + `and ${itemToStringAtIndex(cart.length - 1)}.`)
  }
}


function total() {
  var total = 0
  for ( var i = 0; i < cart.length; i++ ) {
    total = total + getPriceAtIndex(i)
  }
  return total
}

function removeFromCart(item) {
  for ( var i = 0; i < cart.length - 1; i++ ) {
    if ( item = getItemAtIndex(i) ) {
      cart = cart.splice(i,1)
    }
    else {
      return 'That item is not in your cart.'
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
