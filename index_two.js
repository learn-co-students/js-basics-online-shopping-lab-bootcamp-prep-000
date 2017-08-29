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

for(var j = 0; j<cart.length; i++){
  if Object.keys(cart[i]).includes(item)

  console.log("That item is not in your cart.")
  return cart
else{
