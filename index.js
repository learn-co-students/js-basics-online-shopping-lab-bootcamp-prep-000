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

function getCart() {
  return cart
}

function addToCart (item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price})
console.log(`[item] has been added to your cart.`);
return cart
}

function viewCart() {
var cart = {item: price};
for (var item in cart) {
  console.log(`In your cart you have ${item} at ${price}.`)};
if (cart.length = 0) {console.log(`Your shopping cart is empty.`)};
}

// function viewCart() {
//   var i = cart[i];
//   if (cart.length > 0) {"In your cart you have ${item} at {item: price}.";}
//
// else {"Your shopping cart is empty.";}
//
// }

function removeFromCart(item) {


}
