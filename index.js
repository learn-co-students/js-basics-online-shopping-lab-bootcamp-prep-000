var cart = [];
//test()
function test(){
  var q = {'fname':'bob','lname':'smith'}
  var t = [q]
  console.log({'fname':'bob','lname':'smith'})
  console.log(q)
  console.log(`${q}`)
  console.log(t)
  console.log(`${t}`)
  console.log(t[0])
  console.log(`${t[0]}`)
  console.log(t[0].fname)
  console.log(`${t[0].fname}`)
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  console.log(item)
  var itemName=`${item}`
  var itemPrice=Math.floor(Math.random()*100)
  cart.push({itemName,itemPrice})
  console.log(cart)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length===0){return "Your shopping cart is empty."}
  var s = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}` 
  //var i=1
  for(var i=1;i<cart.length-1;i++){
    s+=`, ${cart[i].itemName} at $${cart[i].itemPrice}` 
  }
  if(cart.length>1){s+=`, and ${cart[i].itemName} at $${cart[i].itemPrice}`}
  s+=`.`
  
  return s
  
}

function total() {
  var x = 0
  for(var i=0;i<cart.length;i++){
    x+=cart[i].itemPrice
  }
  return x
}

function removeFromCart(item) {
  for(var i=0;i<cart.length;i++){
    if(item==cart[i].itemName){cart.splice(i,1);return cart;}
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if(cardNumber===undefined){return "Sorry, we don't have a credit card on file for you."}
  var x = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart=[]
  return x
}
