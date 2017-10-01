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

function viewCart() {
  if ( null == cart || [] === cart ) {
    console.log('Your shopping cart is empty.')
  }
  else if ( Object.keys(cart).length = 1 ) {
    console.log(`In your cart, you have ${cart[0]} at ${cart[0]}.`)
  }
  else if ( Object.keys(cart).length = 2 ) {
    console.log(`In your cart, you have ${cart[0][0]} at ${cart[0][1]} and ${cart[1][0]} at ${cart[1][1]}.`)
  }
  else if ( Object.keys(cart).length > 2 ) {
    i=2
    var text = `In your cart, you have `
    while ( i < cart.length-1 ) {
      text = text + `${cart[i][0]} at ${cart[i][1]}, `
      i++
    }
    console.log(text + `and ${cart[cart.length][0]} at ${cart[cart.length][1]}.`)
  }
}


function total() {
  var total = 0
  var prices = Object.values(cart).map
  for ( var i = 0; i < prices.length; i++ ) {
    total = total + prices[i]
  }
  return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
