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
 var price = Math.floor(100*Math.random())
 cart.push({[item] : price})

 console.log(`${item} has been added to your cart.`)
 return cart
 }

function viewCart() {
  // if cart is empty
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.')
  }

  // if items are in cart
  else {
    var cartListChunks = [];
      for (let i = 0; i < cart.length; i++) {
        cartListChunks[i] = ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`
      }

      if (cart.length == 1) {
        console.log(`In your cart, you have${cartListChunks}.`)
      }
      else if (cart.length == 2) {
        console.log(`In your cart, you have${cartListChunks[0]} and${cartListChunks[1]}.`)
      }
      else {
        cartListChunks[cart.length-1] = ` and${cartListChunks[cart.length-1]}.`
        console.log(`In your cart, you have${cartListChunks}`)
      }
  }
}

function total() {
  // write your code here
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal = cartTotal + parseInt(cart[i][Object.keys(cart[i])])
  }
  return cartTotal
}

function removeFromCart(item) {
  var originalCartLength = cart.length;
  for (let i=0; i <cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1)
      return cart
    }
  }
  if (originalCartLength == cart.length) {
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (typeof cardNumber === 'undefined') {
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
