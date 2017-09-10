var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
var itemPrice = Math.floor(Math.random()*100)
cart.push({[item]: itemPrice})
console.log(`${item} has been added to your cart.`)
return cart

}


function viewCart() {
  // write your code here
  debugger;
  if (cart.length === 0) {
  console.log("Your shopping cart is empty.")
} else if (cart.length === 1) {
  // var item = Object.keys(cart[i])[0]
  // var price = cart[i][item]
  // console.log(`In your cart, you have ${item} at $${price}.`)
  var listI = [];
  var b = Object.keys(cart[0]);
  listI.push(b[0]);
  var first = `${listI} at $${cart[0][b[0]]}`;
  console.log(`In your cart, you have ${first}.`)
} else if (cart.length === 2){
  var lastI = Object.keys(cart[cart.length - 1])[0]
  var lastP = cart[cart.length - 1][lastI]
  var listI = [];
  var listP = [];
  var listCombo = [];
  for (var i = 0; i < cart.length - 1; i++) {
    var b = Object.keys(cart[i]);
    listI.push(b[0]);
    listP.push(cart[i][b[0]])
    listCombo.push(`${listI[i]} at $${listP[i]}`)
  }
    console.log(`In your cart, you have ${listI} at $${cart[0][b[0]]} and ${lastI} at $${lastP}.`)
  } else {
  var lastI = Object.keys(cart[cart.length - 1])[0]
  var lastP = cart[cart.length - 1][lastI]
  var listI = [];
  var listP = [];
  var listCombo = [];
  for (var i = 0; i < cart.length - 1; i++) {
    var b = Object.keys(cart[i]);
    listI.push(b[0]);
    listP.push(cart[i][b[0]])
    listCombo.push(`${listI[i]} at $${listP[i]}`)
  }
    console.log(`In your cart, you have ${listCombo.join(", ")}, and ${lastI} at $${lastP}.`)
  }
}



function total() {
  // write your code here
var cash = 0;
var listI = [];
var listP = [];
var listCombo = [];
for (var i = 0; i < cart.length; i++) {
  var b = Object.keys(cart[i]);
  listI.push(b[0]);
  listP.push(cart[i][b[0]])}
for (var j = 0; j < cart.length; j++){
    cash = listP[j] + cash
}
  return cash
}


function removeFromCart(item) {
  // write your code here
  var listI = [];
  var listP = [];
  var listCombo = [];
  for (var i = 0; i < cart.length; i++) {
    var b = Object.keys(cart[i]);
    listI.push(b[0]);
    listP.push(cart[i][b[0]])
  }
  if (listI.includes(item) === false){
  console.log("That item is not in your cart.")
  return cart
  } else {
    var itemNum = listI.indexOf(item)
    cart.splice(itemNum, 1)
    return cart
}}

function placeOrder(cardNumber) {
  // write your code here
  var items = Array.prototype.slice.call(arguments)
  if (items.length < 1){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for (var i = 0; i < cart.length; i++){
      removeFromCart(Object.keys(cart[i])[0])
    }
    return cart
}
}
