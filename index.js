var cart = [];

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (cart.length > 0){
    var list = []
    for (var i = 0; i < cart.length; i++){
      list = [...list, `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`]
    }
    list.join(', ')
    console.log(`In your cart, you have ${list}.`)
  } else {
    console.log(`Your shopping cart is empty.`)
  }
}

function removeFromCart(item){
  for (i=0; i<cart.length; i++) {
    var deleted = 0
    if (Object.keys(cart[i]) = item) {
      deleted = deleted + 1
      delete.cart[i]
    }
  }
    if (cart.hasOwnProperty(item)){
      delete cart[i]
    } else{
      console.log(`That item is not in your cart.`)
    }
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
