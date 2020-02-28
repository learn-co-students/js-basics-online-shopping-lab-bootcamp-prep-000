var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var x={}
  x[item]=(Math.floor(Math.random()*100))
  cart.push(x)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length===0){
    console.log('Your shopping cart is empty.')
  }
  else if (cart.length===1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${(cart[0])[Object.keys(cart[0])]}.`)
  }
  else if (cart.length===2){
    var s=''
    for(var i=0;i<cart.length;i++){
      s=s+(` ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]} and`)
    }
    s=s.slice(0,s.length-4)
    s='In your cart, you have'+s+'.'
    console.log(s)
  }
  else{
    var q=''
    for(var i=0;i<cart.length-1;i++){
      q=q+(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `)
    }
    q=q+(`and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`)
    console.log('In your cart, you have '+q)
    
  }
}
addToCart("mango")
addToCart('nuts')
viewCart()

function total() {
  var x=0
  for (var i=0;i<cart.length;i++){
    x=x+parseInt(cart[i][Object.keys(cart[i])])
  }
  return x
}

function removeFromCart(item) {
  for(var i=0;i<cart.length;i++){
    if (`${Object.keys(cart[i])}`===`${item}`){
      cart.splice(`${i}`,1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  if(cardNumber ===undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    var t=total()
    cart=[]
    console.log(`Your total cost is $${t}, which will be charged to the card ${cardNumber}.`)
  }
}