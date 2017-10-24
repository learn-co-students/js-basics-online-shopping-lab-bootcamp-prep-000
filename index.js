var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {}
  obj[item] = Math.floor(Math.random() * 100 + 1)
  cart.push(obj)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(!cart.length){
    console.log("Your shopping cart is empty.")
  }
  else if(cart.length === 1){
    var i = 0
    var ret = `In your cart, you have ${ Object.keys(cart[i])[0] } at $${ cart[0][Object.keys(cart[i])[0]] }.`
    console.log(ret)
  }
  else if(cart.length ===2){
    console.log( `In your cart, you have ${ Object.keys(cart[0])[0] } at $${ cart[0][Object.keys(cart[0])[0]] } and ${ Object.keys(cart[1])[0] } at $${ cart[1][Object.keys(cart[1])[0]] }.` )
  }
  else {
    var ret = `In your cart, you have ${ Object.keys(cart[0])[0] } at $${ cart[0][Object.keys(cart[0])[0]] }`
    var i = 1
    while(i<cart.length-1){
      ret += `, ${ Object.keys(cart[i])[0] } at $${ cart[i][Object.keys(cart[i])[0]] }`
      i++
    }
    ret += `, and ${ Object.keys(cart[i])[0] } at $${ cart[i][Object.keys(cart[i])[0]] }.`
    console.log(ret)
  }
}

function total() {
  var sum = 0
  for( var i = 0; i<cart.length; i++){
    sum += cart[i][Object.keys(cart[i])[0]]
  }
  return sum
}

function removeFromCart(item) {
  var b = 0
  for(var i=0; i<cart.length; i++){
    if(Object.keys(cart[i])[0] === item ){
      cart.splice(i, 1)
      b=1
    }
  }
  if(!b){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
