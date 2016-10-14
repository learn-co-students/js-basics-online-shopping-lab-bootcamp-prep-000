var cart=[];

function setCart(newCart) {
  cart = newCart;
}
function getCart(){
  return cart
}
function addToCart(item) {
  var price=Math.floor(100*Math.random())
  var item1={[item]:price}
  cart.push(item1)
  console.log(`${item} has been added to your cart.`)
  return cart
}
function viewCart() {
  if (cart.length===0)  {
    console.log("Your shopping cart is empty.")
  }
  else {
    var msg=[]
    for (let i=0;i<cart.length-1;i++) {
      msg.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}, `)
      }
    msg.push(`${Object.keys(cart[cart.length-1])[0]} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])[0]]}.`)
   msgFinal=`In your cart, you have `
   for (let i=0;i<cart.length;i++) {
     var msgFinal=msgFinal+msg[i]
   }
 }
 console.log(msgFinal)
}

function removeFromCart(item) {
  for (let i=0;i<cart.length;i++) {
    if (item===Object.keys(cart[i])[0]) {
      cart.splice(i, 1)
      var found='yes'
    }
  }
  if (found!='yes') {
    console.log('That item is not in your cart.')
  }
}
function total() {
  var total=0
  for (let i=0;i<cart.length;i++) {
    total=total+cart[i][Object.keys(cart[i])[0]]
  }
  return total
}
function placeOrder(cc) {
  if (cc===undefined) {console.log("We don't have a credit card on file for you to place your order.")}
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
        cart=[]
  }
}

/*cart=[{socks:8},{puppy:4},{iPhone:33}]

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
*/
