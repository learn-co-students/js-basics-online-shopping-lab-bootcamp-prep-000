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
    var newStr = list.join(', ')
    console.log(`In your cart, you have ${newStr}.`)
  } else {
    console.log(`Your shopping cart is empty.`)
  }
}

function removeFromCart(item) {
  var noitem = 0
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      noitem = noitem + 1
      cart.splice(i,1)
    }
  }
 if (noitem === 0) {
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(ccnum){
  if (!ccnum){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${ccnum}.`)
    cart = []
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
