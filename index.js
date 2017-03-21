var cart = []

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

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()* 99)
  var newItem = {item: price}
  cart.push(newItem)
  console.log(`${item} has been added to your cart.`)
  return cart
}

fuction viewCart(){

}

function removeFromCart(){

}

function placeOrder(cardNumber){
  if(!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.")
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
}
