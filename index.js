var cart =[];

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

function getCart (){
  var theCart=""
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      theCart = theCart+Object.keys(cart[i])+" $"+cart[i][item]
      if (i < cart.length-1) {
        theCart = theCart+", "
      }
    }
  }
  return theCart
}

function addToCart (item) {
  var price = Math.floor(Math.random()*100)
  cart.push ({[item]:price})
  console.log(item+" has been added to your cart.")
  return getCart ()
}

function viewCart () {
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    var cartContents ="In your cart, you have "
    cartContents =cartContents+getCart()
  console.log(cartContents+".")
  }
}
