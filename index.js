var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var newObject = {}
newObject = {[item]:Math.floor(Math.random()*101)}
cart.push(newObject)
console.log(item + " has been added to your cart.")
return cart
}


function viewCart() {

if (cart.length===0) {console.log("Your shopping cart is empty.")}
if (cart.length===1) {console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`)}
if (cart.length===2) {console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)}
if (cart.length>2) {
  var i=2
var answer = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}, ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]},`
while (cart.length-i>1) {answer = answer + ` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},` ; i++}
answer = answer + ` and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
if (cart.length>2) {console.log(answer)}
}
}

function total() {
var i=0
var n=cart.length
var answer= 0
  while (n>i) {answer = answer + cart[i][Object.keys(cart[i])]; i++}

return answer
}

function removeFromCart(item) {
  var i=0;

    var n=cart.length;
    var m =1000
    for (i=0;i<n;i++) {


      if  (cart[i].hasOwnProperty(item))
      {m=i}

    }
    if (m<1000) {cart.splice(m,1);}
    else {console.log('That item is not in your cart.')}
    return cart}



function placeOrder(cardNumber) {
  if (cardNumber >0) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart=[]
return cart}
  else {console.log('Sorry, we don\'t have a credit card on file for you.')}
}
