var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function price() {
var cost = Math.floor((Math.random()*100)+1)
return cost
}


function addToCart(item) {
 // write your code here
 var priceG=price()
 cart.push({itemName:item,itemPrice:priceG})
 return (item + ' has been added to your cart.')
}

function total() {
  var result = 0
  for (let i=0;i<cart.length;i++){
  result=result + cart[i].itemPrice}
  return result
}

function viewCart() {
  var sentence=[]
  var sentenceMoop=[]
  if (cart.length<=0){return ('Your shopping cart is empty.')}
  if (cart.length>0) {
    for (let i=0; i<cart.length; i++){
      sentence.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)}} 
  if (sentence.length>1){
    return ('In your cart, you have ' + sentence.slice(0,cart.length-1).join(', ')  + ', and ' + sentence.slice(-1) +'.')}
  if (sentence.length===1){
    return ('In your cart, you have ' + sentence[0] +'.'  )}
  }



function removeFromCart(item) {
  var b=cart
  console.log(item)
  for (let i=0; i<cart.length; i++){
    if (cart[i].itemName==item){
    cart.splice(i,1)
    }}
  if (b.length>cart.length){return cart}
  else {return ('That item is not in your cart.')}
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){ return (`Sorry, we don't have a credit card on file for you.`)}
  else {
    var a=(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[]
    return a
  
  }
}
