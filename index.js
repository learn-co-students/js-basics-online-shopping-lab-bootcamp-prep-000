var cart = [];

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor( 101 * Math.random());
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if( cart.length === 0 )
  {
     console.log("Your shopping cart is empty.")
     return undefined
  }
  var out = "In your cart, you have"
  for( var i = 0; i < cart.length-1; i++ )
  {
    out += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`
  }
  out += ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
  console.log(out)
}

function removeFromCart(item) {
  for( var i = 0; i < cart.length; i++ )
  {
    if( cart[i].hasOwnProperty(`${item}`) )
    {
       cart = [...cart.slice(0,i),...cart.slice(i+1)]
	return cart
    }
  }
  console.log( "That item is not in your cart.")
  return "That item is not in your cart."
}

function placeOrder(n) {
  if( n === undefined )
  {
    console.log("We don't have a credit card on file for you to place your order.")
    return cart
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${n}.`)
  cart = [];
  return cart
}
 
  
  
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
