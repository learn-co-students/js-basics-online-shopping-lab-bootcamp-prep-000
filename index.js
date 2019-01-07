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
  var count = 0
  for ( var i = 0; i < cart.length; i++ ) {
      if ( cart[i].hasOwnProperty(item) ) {
          //console.log( Object.keys(cart[i]) )
          cart.splice(i,1)
          return cart
      }
      else if ( cart[i].hasOwnProperty(item) === false ) {
          count = count + 1
      }
  }
  if ( count === cart.length ) {
      console.log(`That item is not in your cart.`)
  }
}

function placeOrder(cardNumber) {
    if ( undefined === cardNumber ) {
        console.log("Sorry, we don't have a credit card on file for you.")
    }
    else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
        cart = []
    }
}
