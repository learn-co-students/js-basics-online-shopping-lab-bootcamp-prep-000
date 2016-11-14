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
  var newArr = Object.keys(cart)
  if (newArr.length > 0){
    var list = []
    for (var item in cart){
      list = [...list, `${item} at $${cart[item]}`]
    }
    list.join(', ')
    console.log(`In your cart, you have ${list}.`)
  } else {
    console.log(`Your shopping cart is empty.`)
  }
}

function removeFromCart(item){
  if (cart.hasOwnProperty(item)){
    delete cart[item]
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
