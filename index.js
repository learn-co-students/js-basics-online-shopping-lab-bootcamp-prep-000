var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var number = Math.random()
  var rounded = 1 + number * Math.floor()
  var price = rounded * 100
  cart.push(`{item: price}`)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  //var i = 0
  if(cart[0] === undefined){
    return "Your shopping cart is empty."
    }
  else{
  //while(cart.length > i){
  for(var item in cart){
    console.log(`In your cart, you have ${item} at ${cart[item]}`)
    //i++
    }
  }
}

function removeFromCart(itemName){
  if(cart.hasOwnProperty(`${itemName}`)){
    var index = cart.indexOf(`${itemName}`)
    cart.splice(index, 1)
    return cart
  }
else{
  return "That item is not in your cart."
}


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
