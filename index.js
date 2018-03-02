var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var x = {[item]: Math.floor(Math.random() * 100 + 1) };
 cart.push(x)
 console.log(`${item} has been added to your cart.`)
 return cart 
}
function viewCart() {
  var v = cart.length
  var y = "In your cart, you have ";
  if (v === 0) {
    console.log("Your shopping cart is empty.")
  }
  else {
    var ind = 0;
    for (var i = v ; i > 0 ; i--) {
      var f = Object.keys(cart[ind]);
      var z = cart[ind][f[0]];
      y = y + f[0] + " at $" + z;
      if (i === 1) {
        y = y + "."
      } 
      else if (i === 2 && v > 2){
        y = y + ", and "
      }
      else if (i === 2 && v < 3 ){
        y = y + " and "
      }
      else {
        y = y + ", "
      }
      ind++
    }
    console.log(y)
  }
}

function total() {
  var t = 0
  var v = cart.length 
  for (var i = 0; i < v ;i++){
   var c = Object.keys(cart[i]);
   t = t + cart[i][c[0]]
  }
  return t
}


function removeFromCart(item) {
  var v = cart.length
  var g = 0
  for (var i = 0; i < v; i++){
    var c = Object.keys(cart[i]);
    if (c[0] === item){
      cart.splice(i, 1);
      g++
      return cart
    }
  }
  if (g === 0){
    console.log("That item is not in your cart.")
  }
  return cart 
}

function placeOrder(cardNumber) {
if (cardNumber === undefined){
  console.log("Sorry, we don't have a credit card on file for you.")
}
else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart.splice(0, cart.length)
}
  
}
