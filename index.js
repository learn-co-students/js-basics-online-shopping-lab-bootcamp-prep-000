var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function getCart(){return cart}

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var holder = []
  var printout = "In your cart, you have "
  for (var i=0; i<cart.length; i++){
    var thing = Object.keys(cart[i])
    holder[i] = `${thing} at $${cart[i][thing]}`
  }
  if (holder.length ===0){console.log("Your shopping cart is empty.")}
  for (var i=0; i<holder.length; i++){
    printout += `${holder[i]}, `
  }
  printout = printout.slice(0,-2)
  printout += '.'
  console.log(printout)
  return printout
}

function removeFromCart(item){
  var x = 0
  for (var i = 0; i<cart.length; i++){
    if (item === Object.keys(cart[i])[0]){cart.shift();x++}
  }
  if (x === 0){console.log('That item is not in your cart.')}
  else console.log(cart)
}

function placeOrder(cardNumber){
  var total = 0
  if (cardNumber){
    for (var i=0; i<cart.length; i++){
      var thing = Object.keys(cart[i])
      total += cart[i][thing]
    }
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`)
  }
  else {console.log("We don't have a credit card on file for you to place your order.")}
  cart = []
}
