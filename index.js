var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function addToCart (item) {
 var thing = {
   item : Math.floor(Math.random()*100)
 }
 cart.push(thing);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart () {
var string = "In your cart you have ";
  if (cart.length >= 0) {
    for (var i=0; i<cart.length; i++) {
      string += cart[i];
      return string;
    }
  }
  else {
    return "Your shopping cart is empty."
  }

}

function removeFromCart (item) {

}

function placeOrder(number) {

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
