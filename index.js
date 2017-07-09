var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var soln={}
 soln[item]=Math.floor(Math.random()*100)
 cart.push(soln)
console.log(item+' has been added to your cart.')
 return cart// write your code here
}

function viewCart() {
  var report='In your cart, you have '
  if(cart.length===0){return console.log('Your shopping cart is empty.')}
  else if(cart.length===1){
    for(var key in cart[0]){
      console.log(report+key+' at $'+cart[0][key]+'.')
    }
  }
  else if(cart.length===2){
    for(var key in cart[0]){
      report=report+key+' at $'+cart[0][key]
    }
    for(var key in cart[1]){
      report=report+' and '+key+' at '+'$'+cart[1][key]+'.'
    }
  console.log(report)}
  else{
    for(var i=0;i<cart.length-1;i++){
      for(var key in cart[i]){
        report=report+key+' at $'+cart[i][key]+', '
      }
    }
    for(var key in cart[cart.length-1]){
      report=report+'and '+key+' at '+'$'+cart[cart.length-1][key]+'.'
    }
  console.log(report)}    // write your code here
}

function total() {
  total=0
  for(var i=0;i<cart.length;i++){
    for(var key in cart[i]){
      total+=cart[i][key]
    }
  }// write your code here
return total}

function removeFromCart(item) {
  var soln=[]
  for(var i=0;i<cart.length;i++){
    for(var key in cart[i]){
      if(key!==item){
        soln.push(cart[i])
      }
    }
  }// write your code here
if(cart.length===soln.length){return console.log('That item is not in your cart.')}
cart=soln
return cart}

function placeOrder(cardNumber) {
  var total=0
  for(var i=0;i<cart.length;i++){
    for(var key in cart[i]){
      total+=cart[i][key]
    }
  }
  if(cardNumber===undefined){return console.log('Sorry, we don\'t have a credit card on file for you.')}
  else{console.log('Your total cost is $'+total+', which will be charged to the card '+cardNumber+'.');
        cart=[]}// write your code here
}
