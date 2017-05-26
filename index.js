var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}


function addToCart(item){
  var price = Math.floor(100*Math.random())
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
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

function viewCart(){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  var strArray = []

  for (var i = 0; i < cart.length; i++){
    var currentItem = Object.keys(cart[i])
    var currentPrice = cart[i][currentItem]
    strArray.push(` ${currentItem} at $${currentPrice}`)
  }
  var str = strArray.join()
  console.log(`In your cart, you have${str}.` )
}


function removeFromCart(removeThis){
  for (var i = 0; i < cart.length; i++){
    var obj = cart[i]
    if (obj.hasOwnProperty(removeThis)){
      cart.splice(i)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}


function placeOrder(cc){
  if(typeof cc === 'undefined' || cc === null){
    console.log("We don't have a credit card on file for you to place your order.")
    return
  }
  var myTotal = total()
  console.log(`Your total cost is $${myTotal}, which will be charged to the card ${cc}.`)
  cart = []
}
