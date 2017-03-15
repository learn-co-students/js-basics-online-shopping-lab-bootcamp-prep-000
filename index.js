var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var number = Math.random()
  var rounded = number * Math.floor()
  var price = 1 + rounded * 100
  cart.push({item:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if(cart[0] === " "){
    "Your shopping car is empty."
  }
  else{
    for(var item in cart){
      console.log(`In your cart, you have ${item} for ${cart[item]}.`)
    }
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
