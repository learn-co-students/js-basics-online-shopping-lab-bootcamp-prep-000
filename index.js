var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  var random = Math.floor((Math.random() * 100) + 1);
  var newobj = {};
  newobj[item]= random;
  cart.push (newobj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])[0] //still slightly confused about the formating of [0]
    if (cart.length === 1) {
      console.log(`In your cart, you have ${key} at $${cart[i][key]}.`);
    }
  }
for (var i = 0; i < [cart.length -1]; i++) {
  var last = cart.length-1
  var lastkey = Object.keys(cart[last])
  var key2 = Object.keys(cart[i])[0] //still slightly confused about the formating of [0]
  if (cart.length === 2) {
    console.log(`In your cart, you have ${key2} at $${cart[i][key2]} and ${lastkey} at $${cart[last][lastkey]}.`);
  }
}

for (var i = 0; i < [cart.length -1]; i++) {
  var last = cart.length-1
  var lastkey = Object.keys(cart[last])
  var key2 = Object.keys(cart[i])[0]
  var statement = ('you have' ${key2} ' at ' {cart[i][key2])})
  if (cart.length > 2) {
    console.log(`In your cart, ${statement}, and ${lastkey} at $${cart[last][lastkey]}.`);
  }
}
  if (cart.length===0) {
  console.log (`Your shopping cart is empty.`)
}
}

// function total() {
// var zero = 0
// for (var i = 0; i < cart.length; i++) {
//   var keys = Object.keys(cart[i])
//   return zero += cart[i][keys];
// }
// }

// function removeFromCart(item) {
//   var 0 ="true"
//   var 1 ="false"
//   var booleanarray=[]
//   var boozero = 0
//   for (var i = 0; i < cart.length; i++) {
//     booleanarray.push(cart[i].hasOwnProperty(item))
//     if ((boozero += booleanarray[i]) === 0) {
//       console.log (`That item is not in your cart.`)
//       return cart;
//     }
//     else {
//       delete cart.item;
//       return cart;
//     }
//   }
// }

function placeOrder(cardNumber) {
  // write your code here
}
