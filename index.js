var cart;

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

var cart = []

function getCart() {
  return cart
}

function addToCart(item){
  var price = Math.floor((Math.random() * 100));
  var obj = {[item]:price}

  cart.push(obj)
  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    var items = Object.keys(cart)
    for (var i = 0, l = items.length; i < l; i++) {
      var array = []
      array.push(`${items[i]} at ${cart[items[i]]}`)
      console.log(`In your cart you have ${array.join(' ')}.`)
    }
  }
}
