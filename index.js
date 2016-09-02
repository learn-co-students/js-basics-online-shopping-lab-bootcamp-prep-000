var cart = []
var item = "Fork"


function getCart() {
return cart
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart(item) {
var price = Math.random()
var itemPrice = {item: price}
cart.push(itemPrice)
console.log(item + " has been added to your cart.")
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

function viewCart() {
  //cart[i][item]
var i = 0
if (cart.length > 0) {
while (cart.length > i){
  console.log("In your cart, you have " + cart[i] + " at $" + cart[i].price + ".")
   i++
   }
return cart
}
else {
  console.log("Your shopping cart is empty.")
}
}

function removeFromCart(item) {
  if (item.hasOwnProperty(cart)) {
  return
} else {
    console.log("That item is not in your cart.")
  }
}
