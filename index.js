var cart;

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(x) {
  var obj = {}
  obj[x] = 0
  getCart().push(obj)
  console.log(`${x} has been added to your cart.`)
  return getCart()
}

function viewCart() {
  var msg = getCart()
    .reduce( (xs, x) =>
      xs + ` ${Object.keys(x)[0]} at $${x[Object.keys(x)[0]]},`
        , 'In your cart, you have')
    .slice(0, -1) + '.'

  msg = getCart().length > 0 ? msg : 'Your shopping cart is empty.'

  console.log(msg)
}

function removeFromCart(x) {
  var _cart = getCart().reduce( (xs,y) => {
    if( y[x] == undefined ) xs.push(x)
    return xs
  }, [])

  if(_cart.length == getCart().length)
    console.log('That item is not in your cart.')

  setCart(_cart)
}

function placeOrder(x) {
  if(x === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
    return null
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${x}.`)
  setCart([])
  return null
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
