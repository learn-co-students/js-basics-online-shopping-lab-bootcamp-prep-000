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
 var thing = {}
 var price =Math.floor(Math.random() * 101)

 thing= Object.assign({},{itemName:item , itemPrice: price})
 cart.push(thing)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  var stuff = "In your cart, you have"
  if(cart.length ===1 ){
    stuff = stuff + ` ${cart[0].itemName} at $${cart[0].itemPrice}.`
    return stuff
  }
  for (var i = 0; i < cart.length; i++) {
    if(i+1 === cart.length && cart.length >1){
      stuff = stuff + ` and ${cart[i].itemName} at $${cart[i].itemPrice}`
    }
    else {
      stuff = stuff + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
  }
  stuff= stuff + "."
  return stuff
}

function total() {
  // write your code here
  var total = 0
  for (var i = 0; i < cart.length; i++) {
    total = total +cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else {
    var cost = total()
    cart.splice(0, cart.length)
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
