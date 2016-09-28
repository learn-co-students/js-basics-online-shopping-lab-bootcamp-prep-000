var cart = [];

function addToCart(item) {
  console.log(`${item} has been added to your cart.`)
  cart.push({[item]: Math.floor((Math.random())*100)})
  return cart
}

function getCart() {
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}

function viewCart(){
  var cartKeys = Object.keys(cart)
  if(cart.length == 0) {
    console.log('Your shopping cart is empty.')
  }
  else {
    var text = 'In your cart, you have'
    for(var i=0; i<cart.length; i++){
      var item = Object.keys(cart[i])
      if(i<cart.length-1) {
        text += ` ${item[0]} at $${cart[i][item[0]]},`
      }
      else {
        text += ` ${item[0]} at $${cart[i][item[0]]}.`
      }
    }
    console.log(text)
  }
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

function removeFromCart(item) {
  var itemList = []
  var originalLength = cart.length
  for (var i = 0; i<cart.length; i++){
    var key = Object.keys(cart[i])
    itemList.push(key[0])
  }
  for(var i = 0; i<cart.length; i++){
    if(item == itemList[i]){
      cart.splice(i,i+1)
    }
  }
  var finalLength = cart.length
  if (originalLength == finalLength){
    console.log("That item is not in your cart.")
  }
}

function placeOrder(creditCard){
  creditCard = creditCard || 'default';
  if (creditCard == 'default') {
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`)
    cart.length = 0
  }
}
