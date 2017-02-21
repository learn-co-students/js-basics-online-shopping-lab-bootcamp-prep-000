var cart = [];

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

}

function addToCart(item){
  var price = Math.random()
  var itemObj = {item: price}
  console.log(`${item} has been added to your cart`)
  return cart

}
