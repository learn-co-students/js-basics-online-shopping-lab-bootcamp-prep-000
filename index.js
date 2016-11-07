var cart = []
var item = Object.keys(cart)

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.random() * 100
  var price = Math.floor()
  cart.push({item: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var newArray = new Array();
  for (var i = 0, l = item.length; i < l; i++) {
    newArray.push(`${item[i]} at $${cart[item[i]]}`)
  }
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else {
    return `In your cart, you have ${newArray.join(', ')}.`
  }
} 
/*function viewCart(){
  var item = Object.keys(cart)
  var newArray = new Array();
  for (var i = 0, l = item.length; i < l; i++) {
    newArray.push(`${item[i]} at $${cart[item[i]]}`)
    if (cart.length === 0){
      return "Your shopping cart is empty."
    } else {
      return `In your cart, you have ${newArray.join(', ')}.`
    }
  }
}
*/

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
